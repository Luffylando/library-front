import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
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
      exact
      path="/members/verify/:id/:verificationToken"
      component={Verify}
    />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/catalog" component={Catalog} />
    <Route exact path="/events/:id" component={SingleEvent} />
    <Route exact path="/events" component={Events} />
    <Route exact path="/books/search/:keyword/:tag" component={Search} />
    <Route exact path="/books/:id" component={SingleBook} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/logout" component={Logout} />
    <Redirect to="/" />
  </Switch>
);

const AdminSwitch = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/contact/messages/answered/:paginationNumber/:itemsPerPage"
      component={AnsweredMessages}
    />
    <Route
      exact
      path="/contact/messages/archived/:paginationNumber/:itemsPerPage"
      component={ArchivedMessages}
    />
    <Route
      path="/contact/messages/:paginationNumber/:itemsPerPage"
      component={Messages}
    />
    <Route
      exact
      path="/members/verify/:id/:verificationToken"
      component={Verify}
    />
    <Route exact path="/contact/messages/:id" component={SingleMessage} />

    <Route exact path="/contact" component={Contact} />
    <Route exact path="/catalog/archived" component={ArchivedBooks} />
    <Route exact path="/catalog" component={Catalog} />
    <Route exact path="/events/add" component={AddEvent} />
    <Route exact path="/events/edit/:id" component={EditEvent} />

    <Route exact path="/events/:id" component={SingleEvent} />
    <Route exact path="/events" component={Events} />

    <Route exact path="/changePassword" component={ChangePassword} />
    <Route exact path="/books/add" component={AddBook} />
    <Route exact path="/books/search/:keyword/:tag" component={Search} />
    <Route exact path="/books/edit/:id" component={EditBook} />
    <Route exact path="/books/:id" component={SingleBook} />

    <Route exact path="/users/edit/:id" component={EditUser} />

    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/logout" component={Logout} />
    <Redirect to="/" />
  </Switch>
);

class Main extends Component {
  render() {
    let routes;
    localStorage.getItem("userRole") === "admin"
      ? (routes = <AdminSwitch />)
      : (routes = <DefaultSwitch />);

    return <Switch>{routes}</Switch>;
  }
}

export default Main;
