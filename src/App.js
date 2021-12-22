import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import NavBarnuevo from "./components/NavBarNuevo";
import Products from "./components/Products";




function App() {
  return (
    <>
      <Router>
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>

      <div>
        <NavBarnuevo/>
        <Products/>
      </div>
      <div>
      </div>
      
    </>
  );
}

export default App;
