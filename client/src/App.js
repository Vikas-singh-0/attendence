import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './Components/Test';
import TLogin from './Login/TLogin';
import PLogin from './Login/PLogin';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';
// import {Register} from './Register/Register';


function App() {
  return (
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login-for-temperary' element={<TLogin/>}/>
     <Route path='/login-for-permanent' element={<PLogin/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
   </Routes>
  );
}

export default App;
