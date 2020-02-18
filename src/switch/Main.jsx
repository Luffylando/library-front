import React, { Component } from "react";
import { Switch, Route, Redirect, Router } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Catalog from "../pages/Books/Catalog";
import ArchivedBooks from "../pages/Books/ArchivedBooks";
import SingleBook from "../pages/Books/SingleBook";
import AddBook from "../pages/Books/AddBook";
import EditBook from "../pages/Books/EditBook";
import Search from "../pages/Books/Search";
import EditUser from "../pages/User/EditUser";
import Messages from "../pages/Messages/AllMessages";
import AnsweredMessages from "../pages/Messages/AnsweredMessages";
import ArchivedMessages from "../pages/Messages/ArchivedMessages";
import SingleMessage from "../pages/Messages/SingleMessage";
import Verify from "../pages/Verify";
import ChangePassword from "../pages/ChangePassword";
import Events from "../pages/Events/AllEvents";
import SingleEvent from "../pages/Events/SingleEvent";
import AddEvent from "../pages/Events/AddEvent";
import EditEvent from "../pages/Events/EditEvent";

const DefaultSwitch = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      path="/contact/messages/answered/:paginationNumber/:itemsPerPage"
      component={AnsweredMessages}
    />
    <Route
      path="/contact/messages/archived/:paginationNumber/:itemsPerPage"
      component={ArchivedMessages}
    />
    <Route
      path="/contact/messages/:paginationNumber/:itemsPerPage"
      component={Messages}
    />
    <Route path="/members/verify/:id/:verificationToken" component={Verify} />
    <Route exact path="/contact/messages/:id" component={SingleMessage} />

    <Route path="/contact" component={Contact} />
    <Route path="/catalog/archived" component={ArchivedBooks} />
    <Route path="/catalog" component={Catalog} />
    <Route path="/events/add" component={AddEvent} />
    <Route path="/events/edit/:id" component={EditEvent} />

    <Route path="/events/:id" component={SingleEvent} />
    <Route path="/events" component={Events} />

    <Route path="/changePassword" component={ChangePassword} />
    <Route path="/books/add" component={AddBook} />
    <Route path="/books/search/:keyword/:tag" component={Search} />
    <Route path="/books/edit/:id" component={EditBook} />
    <Route path="/books/:id" component={SingleBook} />

    <Route path="/users/edit/:id" component={EditUser} />

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
