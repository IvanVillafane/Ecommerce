import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import NavBarnuevo from "./components/NavBarNuevo";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage";




function App() {
  return (
    <>
    <Router>
         <div className="App">
        <NavBarnuevo/>
        <Router to="checkout-page">
          <section>
          <CheckoutPage/>
             <Products/>


          </section>
         
          </Router>
  
          <Router path="/">
          </Router>
        
      </div>


    </Router>
        </>

     
      
  );
}

export default App;
