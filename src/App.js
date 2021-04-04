import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Information from "./pages/Information";
import Friends from "./pages/Friends";
import Settings from "./pages/Settings";
import "./SideMenu.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <SideMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/friends">
          <Friends />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/information">
          <Information />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
