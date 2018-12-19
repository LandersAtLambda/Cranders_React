import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <React.Fragment>
          <div class="container">
        <div class="headerWrap">
            <header>
                <a href="index.html" class="logo">Cranders</a>
                <nav>
                    <a href="index.html">Home</a>
                    <!-- <a href="#">About</a>
                    <a href="#portfolio">Portfolio</a> -->
                    <a href="#">Contact</a>
                </nav>
            </header>
        </div>
        <div class="hero"><div class="attribution">Credit: <a href="https://www.flickr.com/photos/98786299@N00/9889667656/">Flickr/Peter Thoeny</a></div>
            <div class="tagline"><h1>Full Stack Web Developer</h1><br><h4>In Training</h4></div>
            <div class="headshot"><img src="img/headshot.png" alt=""></div>
        </div>
        <div class="bodyWrap">
            <div class="portfolio">
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
