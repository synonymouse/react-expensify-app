import React from "react";
import ExpanseDashboardPage from "../components/ExpanseDashboardPage";
import AddExpansePage from "../components/AddExpansePage";
import EditExpensePage from "../components/EditExpensePage";
import AddHelpPage from "../components/AddHelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpanseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpansePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={AddHelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
