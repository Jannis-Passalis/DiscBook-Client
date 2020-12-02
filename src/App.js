import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import MyDiscBook from "./pages/MyDiscBook";
import SignUp from "./pages/SignUp";
import AddCd from "./pages/AddCd";
import ScreenMessages from "./components/ScreenMessages";
import Home from "./pages/Home";
import WelcomePage from "./pages/WelcomePage";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Navigation />
      <ScreenMessages />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/cds" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/mydiscbook" component={MyDiscBook} />
        <Route path="/signup" component={SignUp} />
        <Route path="/addcd" component={AddCd} />
      </Switch>
    </div>
  );
}

export default App;
