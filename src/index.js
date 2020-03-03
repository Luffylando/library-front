import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./history";
import Main from "./switch/Main";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./styles/GlobalStyle";
import { Provider } from "react-redux";
import store from "./store";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "react-datepicker/dist/react-datepicker.css";

// scroll on top of page when we go to other page from the one we are on.
history.listen(location => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  });
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ReactNotification />
      <GlobalStyle />
      <Main />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
