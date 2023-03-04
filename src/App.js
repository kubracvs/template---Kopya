import {BrowserRouter,Route, Routes} from "react-router-dom";
import './App.css';
import Contact from "./pages/Contact.jsx";
import People from "./pages/People.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";


function App() {
  return (
 
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/people" element={<People/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
