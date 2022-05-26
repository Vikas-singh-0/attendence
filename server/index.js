const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
const app = express();
const cors = require("cors");
const Employee = require("./Models/Employee");
const jsonwebtoken = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const AttendenceSchema = require("./Models/AttendenceSchema");

const requresLogin =  expressJwt.expressjwt({
  secret: "test",
  algorithms: ["HS256"],
})

app.use(cors());
app.use(express.json());

// expressJwt.expressjwt
const isPremanent =async (req,res,next)=>{
  const user = await Employee.findById(req.auth.id).select('-password')
  if(user.premanent){
    req.user = user;
    return next()
  }
  return res.status(401).json({
    message:"you are not permanent employee,Please login to the temp user page"
  })
}

app.get(
  "/",
  requresLogin,
  async (req, res, next) => {
    console.log(JSON.stringify(req.auth));
    res.json({ success: true , user:req.auth});
  }
);

app.get('/api/employee/details',requresLogin,async (req,res,next)=>{
  try {
      const userDetails = await Employee.findById(req.auth.id)
      if(userDetails){
        return res.json({
          userDetails
        })
      }else{
        return res.json({message:"User does not exist"})
      }
  } catch (error) {
    return res.json({message:"error occured"})
  }
})

//attendence routes
app.post('/api/attendence/markAttendence',requresLogin,async(req,res,next)=>{
  const employee = await Employee.findById(req.auth.id)
  console.log(employee);
  if(employee){
    const todayAttendence = await AttendenceSchema.create(req.body)
    await employee.attendence.push(todayAttendence)
    await employee.save()
    return res.json({message:"marked attendence for today"})
  }else{
    return res.json({message:"user does not exist"})
  }
})


//employee register routes
app.post("/api/employee/register", async (req, res) => {
  try {
    const employee = await Employee.findOne({ email: req.body.email });
    if (!employee) {
      const newEmp = await Employee.create(req.body);
      newEmp.save();
      res.json({
        message: "created new employee",
        newEmp,
      });
    } else {
      res.json({
        message: "Alredy registered , PLease login",
      });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

//employee login route
app.post("/api/employee/login", async (req, res) => {
  try {
    const employee = await Employee.findOne({ email: req.body.email });
    if (employee) {
      employee.comparePassword(req.body.password, (err, match) => {
        if (err) {
          return res.json({ message: err.message });
        }
        if (!match) {
          return res.json({ message: "wrong creds" });
        } else {
          const token = jsonwebtoken.sign(
            {
              id: employee._id,
              //       email: employee.email,
              //       password: employee.password,
            },
            "test",
            {
              expiresIn: "10d",
            }
          );
          return res.json({
            message: "Logged in",
            token,
          });
        }
      });
    } else {
      res.json({
        message: "Please register",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

//connect to DB
mongoose.connect(
  "mongodb://localhost:27017/attendence",
  { useNewUrlParser: true },
  (err, conn) => {
    if (err) {
      console.log(err);
    }
    console.log("connected to the DB");
  }
);
//start server
app.listen(PORT, (err, conn) => {
  if (err) console.log(err);
  console.log("connected at ", PORT);
});
