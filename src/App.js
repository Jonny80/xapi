import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Demo from "./pages/Demo";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path={"/register"} element={<Register />}/>
            <Route path={"/dashboard"} element={<Dashboard/>}/>
            <Route path={"/"} element={<Demo/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
