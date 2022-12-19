import logo from './logo.svg';
import './App.css';
import RegistrationForm from './component/registrationForm';
// admin
import Admin from './component/admin';
// router
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
       <Routes>
         <Route path="/" element={<RegistrationForm />} />
         <Route path="/admin" element={<Admin />} />
       </Routes>
    </div>
  );
}

export default App;
