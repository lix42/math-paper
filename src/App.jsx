// @flow
import * as React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./Routes";
import classes from "./styles";
import reactLogo from "./assets/React-icon.png";

const App = (): React.Node => (
  <BrowserRouter>
    <main className={classes.container}>
      <div>
        <h1>hello world!</h1>
        <img className={classes.image} alt="react logo" src={reactLogo} />
        <p>If you see this everything is working!</p>
      </div>
      <ul className={classes.left}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
