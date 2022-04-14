import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Footer from "./Pages/Sheared/Footer/Footer";
import Header from "./Pages/Sheared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
