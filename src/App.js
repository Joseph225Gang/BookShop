import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Book from "./books/Book";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/books" component={Book} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;