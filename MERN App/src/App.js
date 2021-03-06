import React from "react";
import NavBar from "./components/Navbar.component";
import Header from "./components/Header.component";
import Feed from "./components/Feed.component";
import About from "./components/About.component";
import Search from "./components/Search.component";
import Footer from "./components/Footer.component";
import SignUp from "./components/SignUp.component";
import LogIn from "./components/LogIn.component";
import Add from "./components/Add.component";

import "./components/css/App.css";
import "./components/css/main.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-wrapper">
          <NavBar />

          <Route path="/" exact component={Header} />
          <Route path="/" exact component={Search} />
          <br />
          <Route path="/articles" component={Feed} />
          <Route path="/" exact component={About} />
          <Route path="/signup" component={SignUp} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/PostArticle" component={Add} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
