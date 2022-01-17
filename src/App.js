import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import About from "../src/pages/About/About";
import Contact from "./pages/Contact/Contact";
import Main from "./Components/Main/Main";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
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
