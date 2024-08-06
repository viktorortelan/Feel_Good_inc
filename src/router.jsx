import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
export default function Site() {
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}