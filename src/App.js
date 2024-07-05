import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
 
import Contact from "./pages/Contact";
import Menu from "./pages/Menu"
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
function App() 

{
  return (
    <div className="App">
      <Router>
      <Navbar />
       
      
         <Routes>    
        < Route path= '/' exact Component={Home} />
        < Route path= '/about' exact Component={About} />
        < Route path= '/contact' exact Component={Contact} />
        < Route path="/menu" exact Component={Menu}/>
        </Routes>
        
        
        <Footer />
       </Router>     
      </div>
     
  );
}

export default App;

