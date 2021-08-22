// import logo from './logo.svg';
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CloudService from "./pages/CloudService";
import WebService from "./pages/WebService";
import CyberSecurity from "./pages/CyberSecurity";
import ArticlePage from "./pages/ArticlePage";
import ArticlesList from "./pages/ArticlesList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import MyNavBar from "./NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/blog">
            <ArticlePage />
          </Route>
          <Route path="/ArticlesList">
            <ArticlesList />
          </Route>
          <Route path="/WebService">
            <WebService />
          </Route>
          <Route path="/CloudService">
            <CloudService />
          </Route>
          <Route path="/CyberSecurity">
            <CyberSecurity />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
