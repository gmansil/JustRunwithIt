import "./App.css";
import HomePage from "./Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Monday from "../src/Pages/Monday";
import Tuesday from "../src/Pages/Tuesday";
import Wednesday from "../src/Pages/Wednesday";
import Thursday from "../src/Pages/Thursday";
import Friday from "../src/Pages/Friday";
import Saturday from "../src/Pages/Saturday";
import Sunday from "../src/Pages/Sunday";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Monday" component={Monday} />
          <Route exact path="/Tuesday" component={Tuesday} />
          <Route exact path="/Wednesday" component={Wednesday} />
          <Route exact path="/Thursday" component={Thursday} />
          <Route exact path="/Friday" component={Friday} />
          <Route exact path="/Saturday" component={Saturday} />
          <Route exact path="/Sunday" component={Sunday} />
          <Route component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
