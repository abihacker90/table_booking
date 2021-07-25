import Pepperoni from '../../images/Pepperoni.png'
import HamAndCheese from '../../images/HamAndCheese.png'
import Hawaiian from '../../images/Hawaiian.png'
import Vegetarian from '../../images/Vegetarian.png'
import BeefAndOnion from '../../images/BeefAndOnion.png'
import ElScorcho from '../../images/ElScorcho.png'
import Godfather from '../../images/Godfather.png'
import Supreme from '../../images/Supreme.png'
import NoIdeas from '../../images/NoIdeas.png'
import { Link } from "react-router-dom";

const pizzas = [
    {
        img: Pepperoni,
        name: "Pepperoni",
        toppings: "Lots of pepperoni & mozzarella",
        price:"10"
    },
    {
        img: HamAndCheese,
        name: "Ham & Cheese",
        toppings: "Smoked ham & mozzarella",
        price:"10"
    },
    {
        img: Hawaiian,
        name: "Hawaiian",
        toppings: "Smoked ham, juicy pineapple & mozzarella",
        price:"15"
    },
    {   
        img: Vegetarian,
        name: "Atom Supreme",
        toppings: "Grounded beef, smoked ham, red onion, baby spinach, fiery jalapenos, mushrooms & tomato with oregano & mozzarella",
        price:"125"
    },
    {   
        img: BeefAndOnion,
        name: "Beef & Onion",
        toppings: "Grounded beef, red onion & mozzarella on BBQ sauce",
        price:"24"
    },
    {   
        img: ElScorcho,
        name: "El Scorcho",
        toppings: "Grounded beef, pepperoni, fiery jalapenos & diced tomato, finished with chilli flakes",
        price:"18"
    },
    {   
        img: Godfather,
        name: "Godfather",
        toppings: "Pepperoni, Italian sausage, tomato, capsicum, olives, mozzarella & oregano on a tomato & garlic sauce base",
        price:"26"
    },
    {   
        img: Vegetarian,
        name: "Vegetarian",
        toppings: "Baby spinach, mushrooms & tomato with oregano & mozzarella",
        price:"25"
    },
    {   
        img: Supreme,
        name: "Supreme",
        toppings: "Pepperoni, bacon, capsicum, ground beef, Italian sausage, mushroom, pineapple, topped with oregano & spring onion",
        price:"30"
    },


];

function Pizzamenu () {
    return (
        
        <div className="Pizzamenu">
            <h2 className="menu-heading" id="menu">Menu</h2>
            <div className="pizza">
                {pizzas.map((pizza, index) => {
                    console.log(pizza.name)
                    return (
                        <div className="onePizza">
                            <h3>{pizza.name}</h3>
                            <img src={pizza.img} alt={pizza.name} />
                            <p>{pizza.toppings}</p>
                            <p className="price">{pizza.price}</p>
                        </div>
                )
                    
                })}
                <div className="onePizza" id="hideLink">
                <Link to="/game">
                    <h3 class="stayBlue">No Ideas</h3>
                    <img src={NoIdeas} alt="NoIdeas" />
                    <p class="stayBlue">Extra cheesy, real 90s pizza (only for the brave).</p>
                    <p className="price stayBlue">10</p>
                </Link> 
                </div>
            </div>
        </div>
    );
}

export default Pizzamenu;