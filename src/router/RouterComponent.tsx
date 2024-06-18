import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";

export default function RouterComponent(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </BrowserRouter>
    )
}
