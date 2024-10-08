// ? Libraries
import React from "react";
import { HashRouter, Switch, Route, useHistory } from "react-router-dom";

import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import WhatsOn from "./components/WhatsOn.js";
import About from "./components/About.js";
import Book from "./components/Book.js";

import "./styles/styles/style.scss";

const App = () => (
  
  <HashRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/whats-on" component={WhatsOn} />
      <Route exact path="/about" component={About} />
      <Route exact path="/book" component={Book} />
    </Switch>
    <Footer />
  </HashRouter>
);

export default App;
