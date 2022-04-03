import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import GamingAccs from "./Page/GamingAccs/GamingAccs";
import Product from "./Page/Product/Product";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import Error from "./Page/Error";
import MainPage from "./MainPage";
function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/*" exact element={<MainPage />} />
          <Route path="/Sign%20in" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*     <Routes>
          <Route path="/Sign%20in" element={<Login />} />
        </Routes>; */
