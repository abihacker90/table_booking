import "./App.css";
import Booking from "./components/Booking/Booking";
import Welcome from "./components/Welcome/Welcome";
import Intro from "./components/Intro/Intro";
import Pizzamenu from "./components/Pizzamenu/Pizzamenu";
import BookBtn from "./components/BookBtn/BookBtn";
import SpinPizza from "./components/Gamepizza/SpinPizza";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {


  return (
    <>

        <Router>
          <div className="App">
            <Route exact path="/">
              <Welcome />
              <Intro />
              <Pizzamenu />
              
                <Link to="/reservations"><BookBtn /></Link>
              
            </Route>
            <Route path="/reservations">
              <Booking />
            </Route>
            <Route path="/game">
              <SpinPizza/>
            </Route>
           
          </div>
        </Router>

    </>
  );
}

export default App;
