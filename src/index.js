import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <React.Fragment>
          <div className="container">
            <div className="headerWrap">
            <header>
                <a href="index.html" className="logo">Cranders</a>
                <nav>
                    <a href="index.html">Home</a>
                    <a href="#">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
        </div>
              <div className="hero"><div className="attribution">Credit: <a href="https://www.flickr.com/photos/98786299@N00/9889667656/">Flickr/Peter Thoeny</a></div>
                  <div className="tagline"><h1>Full Stack Web Developer</h1><br/><h4>In Training</h4></div>
                  <div className="headshot"><img src="./img/headshot.png" alt="" /></div>
              </div>
            <div className="bodyWrap">
            <div className="portfolio">
                <h2>Projects</h2>
            </div>
        </div>
            <footer>
            <nav>
                <a href="#">Home</a>
                <a href="#">Contact</a>
            </nav>
        </footer>    
    </div>

    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
