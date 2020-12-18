import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from "./../src/routes/index.routes";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Router>
        {routes.map((item, index) => {
          return (
            <Route
              key={`${item.url}-${index}`}
              exact
              path={item.url}
              component={item.component}
            />
          );
        })}
      </Router>
    </main>
  );
}

export default App;
