
import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import About from './pages/about-us';
import WSL from './pages/why-sri-lanka';
import FAQ from './pages/faq';
import BLOG from './pages/blog';
import LOGIN from './pages/login';
import REG from './pages/register-your-hotel';
import Footer from './components/footer';
import BW from './pages/beauty-and-wellness-program';
import PT from './pages/panchakarma-treatment';
import NS from './pages/not-sure-what-i-want';
import FM from './pages/perfect_match';

function App() {


  return (
    <Router>
      <Header/>  
      <Routes>        
        <Route exact path="/" element={<Home/>} />        
        <Route path="/about-us" element={<About/>} /> 
        <Route path="/why-sri-lanka" element={<WSL/>} /> 
        <Route path="/faq" element={<FAQ/>} /> 
        <Route path="/blog" element={<BLOG/>} /> 
        <Route path="/login" element={<LOGIN/>} /> 
        <Route path="/register-your-hotel" element={<REG/>} /> 
        <Route path="/beauty-and-wellness-program" element={<BW/>} /> 
        <Route path="/panchakarma-treatment" element={<PT/>} /> 
        <Route path="/not-sure-what-i-want" element={<NS/>} /> 
        <Route path="/perfect-match" element={<FM/>} /> 
      </Routes>    
      <Footer/>
    </Router>
     
  );

}

export default App;
