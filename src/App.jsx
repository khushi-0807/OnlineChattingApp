import Home from "./Components/Home.jsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";


function App() {
  

  return (
    <Router>
    <Routes>
   
   <Route path="/" element={<Home/>}/>
   <Route path="/Login" element={<Login/>}/>
     
    </Routes>
    </Router>
  )
}

export default App
