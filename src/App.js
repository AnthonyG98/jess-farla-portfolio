import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Gallery from "./components/gallery"
import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"
import "./responsive.css"
function App() {
  function openMenu(){
    const exitSign = document.querySelector(".exit");
    const mobLink = document.querySelector(".mob-links");
    mobLink.style.animation = "open 0.3s ease"
    mobLink.style.animationFillMode ="forwards"
    exitSign.style.display ="flex"
  }
  function closeMenu(){
    const mobLink = document.querySelector(".mob-links");
    const exitSign = document.querySelector(".exit");
    exitSign.style.display ="none"
    mobLink.style.animation = "move-left 0.3s ease"
    mobLink.style.animationFillMode ="forwards"
  }
  return (
    <Router>
    <div className="App">
      <div className="bars-container" onClick={openMenu}>
        <div className="bar" id="one"></div>
        <div className="bar" id="two"></div>
        <div className="bar" id="three"></div>
      </div>
    <div className="links-container">
      <div className="logo-container">
          <h1 className="logo-text">JessFarlaArt</h1>
      </div>
      <div className="links">
          <Link to="/" className="link" id="home">Home</Link>
          <Link to="/gallery" className="link" id="gallery">Gallery</Link>
          <Link to="/about" className="link" id="about">About</Link>
          <Link to="/contact" className="link" id="contact">Contact</Link>
        </div>
        <div className="mob-links">
          <div className="exit" onClick={closeMenu}>
            <div id="exit-one"></div>
            <div id="exit-two"></div>
          </div>
          <Link to="/" className="mob-link" id="home" onClick={closeMenu}>Home</Link>
          <Link to="/gallery" className="mob-link" id="gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/about" className="mob-link" id="about" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="mob-link" id="contact" onClick={closeMenu}>Contact</Link>
        </div>
    </div>
      
  <Switch>
  
    <Route path="/gallery" component={Gallery}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <div className="main-img">
      <div className="home-image"></div>    
      <Route exact path="/"/>
    </div>

  </Switch>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
