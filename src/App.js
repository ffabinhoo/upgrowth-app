import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/search" component={SearchPage} />
              <Route path="/about" component={AboutPage} />
              

              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
