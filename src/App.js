import Navbar from "./Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Contact from "./pages/Contact/Contact";
import Main from "./Main/Main";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
          <Main />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
