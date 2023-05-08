import "./App.css";
import { Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={Home} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
