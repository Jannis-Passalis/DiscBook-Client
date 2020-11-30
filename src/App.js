import "./App.css";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import MyDiscBook from "./pages/MyDiscBook";
import SignUp from "./pages/SignUp";
import AddCd from "./pages/AddCd";
import ScreenMessages from "./components/ScreenMessages";

function App() {
  return (
    <div>
      <Navigation />
      <ScreenMessages />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/mydiscbook" component={MyDiscBook} />
        <Route path="/signup" component={SignUp} />
        <Route path="/addcd" component={AddCd} />
      </Switch>
    </div>
  );
}

export default App;
