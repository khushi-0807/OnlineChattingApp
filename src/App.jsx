import Home from "./Components/Home.jsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";


function App() {
  

  return (
    <Router>
    <Routes>
   
   <Route path="/" element={<Home/>}/>
   <Route path="/Login" element={<Login/>}/>
   <Route path="/SignUp" element={<SignUp/>}/>
     
    </Routes>
    </Router>
  )
}

export default App
