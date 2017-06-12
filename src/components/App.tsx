import * as React from "react";
import { render } from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component<{}, {}>
{
  render()
  {
    return (
      <Router>
        <div>Hello World!</div>
      </Router>
    );
  }
}

// eventually, we render this as a string. For now, just bind it to a node
render(<App />, document.getElementById("app"));


