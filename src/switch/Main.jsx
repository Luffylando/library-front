import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Catalog from "../pages/Books/Catalog";
import SingleBook from "../pages/Books/SingleBook";
import AddBook from "../pages/Books/AddBook";
import EditBook from "../pages/Books/EditBook";

const DefaultSwitch = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/service" component={Service} />
    <Route path="/contact" component={Contact} />
    <Route path="/catalog" component={Catalog} />
    <Route path="/books/add" component={AddBook} />
    <Route path="/books/edit/:id" component={EditBook} />
    <Route path="/books/:id" component={SingleBook} />

    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/logout" component={Logout} />
    <Redirect to="/" />
  </Switch>
);

class Main extends Component {
  render() {
    let routes = <DefaultSwitch />;
    return <Switch>{routes}</Switch>;
  }
}

export default Main;
