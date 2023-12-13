import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Dashboard/home";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/dashboard';
import Grade from './components/Doc/Grade';
import GradeForm from './components/Doc/Grade-Form';
import Instructors from './components/Doc/Instructors';
import Support from './components/Doc/Support';





function App() {
  return (
    <Routes>
        <Route>
            <Route  path="*" element={<Home />} />{/* Take this Route as a URL  example ug.edu.gh/login, ug.edu.gh/dashboard */} 
            <Route  path="/login" element={<Login />} />
            <Route  path="/dashboard" element={<Dashboard />} />    
            <Route  path="/home" element={<Home />} />    
            <Route  path="/grade" element={<Grade />} />    
            <Route  path="/grade-form" element={<GradeForm />} />    
            <Route  path="/instructor" element={<Instructors />} />    
            <Route  path="/support" element={<Support />} />      
      </Route>
    </Routes>
  );
}

export default App;
