import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Carosel from "./components/Carosel";
import Body from "./components/Body";
import Tab from "./components/Tab";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>


       

          <Route exact path="/">
            <Navbar />
            <Carosel />
            <Body />
            <Tab />
            
            <Footer />
          </Route>

          <Route exact path="/about">
            <Navbar />
            <About />
            <Footer />
          </Route>

          <Route exact path="/contact">
            <Navbar />
            <Contact />
            <Footer />
          </Route>

          <Route>
            <div>
              <h1>404 Not Found</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
