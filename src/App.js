import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "./pages/users/Users";
import Pizza from "./pages/pizza/Pizza";
import Menu from "./components/menu/Menu";
function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/pizza" component={Pizza} />
      </Switch>
    </>
  );
}

export default App;
