// ? Libraries
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import WhatsOn from "./components/WhatsOn.js";
import About from "./components/About.js";
import Book from "./components/Book.js";

import "./styles/styles/style.scss";

const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/mvh-example-draft" component={Home} />
      <Route exact path="/mvh-example-draft/whats-on" component={WhatsOn} />
      <Route exact path="/mvh-example-draft/about" component={About} />
      <Route exact path="/mvh-example-draft/book" component={Book} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
