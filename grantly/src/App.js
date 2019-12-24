// Dependencies
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchApi } from "./actions/index";
import { useAuth0 } from "./react-auth0-wrapper";

// Objects
import SubmitForm from "./components/SubmitForm";
import Home from "./views/Home";
import Landing from "./views/Landing";
import About from "./components/About";
import GrantTable from "./components/grants/GrantTable";
import NavBar from "./components/Navbar";
import Sitemap from "./components/Sitemap";
import PrivateRoute from "./util/PrivateRoute";
import Favorites from "./views/Favorites";
// Stylings
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/theme";

function App({ fetchApi }) {
  const { user, isAuthenticated, getTokenSilently } = useAuth0();

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (isAuthenticated) {
      const authToken = getTokenSilently().then(res => {
        const token = res;
        const role =
          user["https://founder-grants.com/appdata"].authorization.roles.find(
            () => "Moderator"
          ) === "Moderator"
            ? "Moderator"
            : "User";
        setCurrentUser({ ...user, role: role, token: token });
      });
    }
  }, [user]);

console.log("CurrentUser", currentUser);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Route
            path="/"
            render={props => <NavBar {...props} fetchApi={fetchApi} currentUser={currentUser}/>}
          />
          {/* <EmailDialog /> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/grants" render={props => <Home {...props} />} />
          <Route path="/form" render={props => <SubmitForm {...props} />} />
          {/* <Route path="/login" component={LoginForm} /> */}
          <Route path="/about" component={About} />
          {isAuthenticated && (
            <PrivateRoute
              exact
              path="/table"
              render={props => (
                <GrantTable {...props} currentUser={currentUser} />
              )}
            />
          )}
          <Route
            exact
            path="/favorites"
            render={props => <Favorites {...props} currentUser={currentUser} />}
          />
          <Sitemap />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default connect(null, { fetchApi })(App);
