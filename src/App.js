
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
import AL from './pages/ayurveda-in-everyday-life';
import DW from './pages/why-you-should-drink-warm-water';
import TS from './pages/ayurveda-and-historic-tourism-in-srilanka';
import SI from './pages/sri-lanka-vs-india';


function App() {

  
  return (
    <Router>
      <Header/>  
      <Routes>        
        <Route exact path="/" element={<Home/>} />  
        <Route path="/home" element={<Home/>} />       
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
        <Route path="/ayurveda-in-everyday-life" element={<AL/>} /> 
        <Route path="/why-you-should-drink-warm-water" element={<DW/>} /> 
        <Route path="/ayurveda-and-historic-tourism-in-srilanka" element={<TS/>} /> 
        <Route path="/sri-lanka-vs-india" element={<SI/>} /> 
      </Routes>    
      <Footer/>
    </Router>
     
  );

}

export default App;
