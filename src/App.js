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
import Test from "./pages/test";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path={"/register"} element={<Register />}/>
            <Route path={"/dashboard"} element={<Dashboard/>}/>
            <Route path={"/demo"} element={<Demo/>} />
            <Route path={"/test"} element={<Test/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
