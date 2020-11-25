import "./App.css";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
