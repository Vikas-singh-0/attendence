const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Employee = new mongoose.Schema({
        name:{
                type:String,
                required:true
        },
        email:{
                unique:true,
                type:String,
                required:true
        },
        password:{
                type:String,
                required:true,
                minlength:6
        },
        age:{
                type:Number,
                required:true
        },
        premanent:{
                type:Boolean,
                default:false,
                required:true
        },
        CTC:{
                type:String,
                required:true
        },
        attendence:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Attendence'
        }]
},{
        timeseries:true
})

Employee.pre('save',async function(next){
       let emp = this;
       console.log("runin");
        if(this.isModified('password')){
                const hash= await bcrypt.hash(emp.password,12)
                console.log("hashed pass", hash);
                emp.password = hash
                if(hash){
                        return next()
                }
                else{
                        return next(err)
                }
        }
})

Employee.methods.comparePassword = async function(password,next){
        console.log(password,this.password);
       const match =await bcrypt.compare(password,this.password)
       console.log(match);
        if(match){
                next(null,match)
        }else{
                next("error occured",false)
        }
}               


module.exports = mongoose.model('Employee',Employee)