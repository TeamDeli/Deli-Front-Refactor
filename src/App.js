import React, { useState } from "react";
import AddFriends from "./pages/AddFriends";
import Profile from "./pages/Profile";
import Calendar from "./pages/Calendar";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsByFunction from "./pages/ProductsByFunction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [SearchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <NavBar setSearchTerm={setSearchTerm} />
      <Switch>
        <Route
          exact
          path="/calendar"
          component={() => <Calendar></Calendar>}
        ></Route>
        <Route
          path="/"
          exact
          component={() => <LandingPage SearchTerm={SearchTerm}></LandingPage>}
        ></Route>
        <Route
          exact
          path="/profile"
          component={() => <Profile></Profile>}
        ></Route>
        <Route path="/addFriends" exact component={AddFriends}></Route>
        <Route exact path="/product/:id" component={ProductsByFunction}></Route>
      </Switch>
    </Router>
  );
}
export default App;
