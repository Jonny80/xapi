import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './App.css';
import React, {useState} from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./unusedPages/Dashboard";
import Demo from "./unusedPages/Demo";
import Interner from "./unusedPages/Interner";
import Modul from "./Components/Modul";
import Homepage from "./pages/Homepage";
const authmanager = require("./manager/Authmanager").default.getInstance();

function App() {

    const [modul,setModul] = useState();
    function setMod(value) {
        setModul(value);

    }
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path={"/register"} element={<Register />}/>
            <Route path={"/dashboard"} element={<Dashboard/>}/>
            <Route path={"/demo"} element={<Demo/>} />
            <Route path={"/interner"} element={<Interner setModul={setMod}/>} />
            <Route path={"/home"} element={<Homepage/>}/>
            <Route path={"/modul"} element={<Modul userId={authmanager.userId} modul={modul}/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
