import { useState, useEffect } from "react";
import './SpinPizza.css'
import Spinner from "../../images/spinner.png"
import Gajdos from "../../images/Gajdos.png"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import yellow from '@material-ui/core/colors/yellow'


const SpinPizza = () => {

    const pizzas = [
        {
            
            name: "Pepperoni",
            toppings: "Lots of pepperoni & mozzarella",
            price:"10"
        },
        {
            
            name: "Ham & Cheese",
            toppings: "Smoked ham & mozzarella",
            price:"10"
        },
        {
            
            name: "Hawaiian",
            toppings: "Smoked ham, juicy pineapple & mozzarella",
            price:"15"
        },
        {   
            
            name: "Vegetarian",
            toppings: "Baby spinach, mushrooms & tomato with oregano & mozzarella",
            price:"25"
        },
        {   
            
            name: "Beef & Onion",
            toppings: "Grounded beef, red onion & mozzarella on BBQ sauce",
            price:"24"
        },
        {   
           
            name: "El Scorcho",
            toppings: "Grounded beef, pepperoni, fiery jalapenos & diced tomato, finished with chilli flakes",
            price:"18"
        },
        {   
            
            name: "Godfather",
            toppings: "Pepperoni, Italian sausage, tomato, capsicum, olives, mozzarella & oregano on a tomato & garlic sauce base",
            price:"26"
        },
        {   
            
            name: "Supreme",
            toppings: "Pepperoni, bacon, capsicum, ground beef, Italian sausage, mushroom, pineapple, topped with oregano & spring onion",
            price:"30"
        }
    
    ];

    const pizzaName = pizzas.map((t) => t.name)

    const [pizza, setPizza] = useState("Click to spin for pizza")
    const [isDisabled, setIsDisabled] = useState(null)
    const [isHidden, setIsHidden] = useState(null)
    const [isAnimated, setAnimation] = useState(null)
    //const [duration, setDuration] = useState(null)



    function getIngredient(e) {
        
        let randomNumber = Math.floor(Math.random() *8)
       
        setIsHidden("hidden")
        setPizza(`Congratulations, your ${pizzaName[randomNumber]} pizza is on the house`)
        console.log(pizza)
        setIsDisabled(true)  
        setAnimation("animated") 
       
    }

    useEffect(() => {


        //-couldn't manage to coordinate timeout with spinner, so not using any of these anymore
        //let randomTime = Math.floor(Math.random() * (14-4) + 4 )

        // function handleTimer(){
        //     let spinner = document.getElementById("pizzaSpinner");
        //     spinner.style.animationDuration = randomTime.toString();
        //     console.log("timer function running", spinner)
        // }
       // let timeOutTime = randomTime * 1000 
     
        setTimeout(()=> {
            setIsHidden(null)
        }, 9000)
        
        
        // function handleDuration() {
        //     setDuration({animationDuration: randomTime})
        // }

        // return function cleanup() {
        //     setDuration(null)
        // }
    });

    // function handleDuration (time) {
    //     
    //     
    // }

    return (
        <div id="game-container">
            {/* <img id="pizzaSpinner" src={Spinner} className={isAnimated}  alt="pizza spinner"/> */}
            <div id="spin-the-wheel">
                <ArrowDropDownIcon id="downArrow" style={{ fontSize: 90, paddingBottom: 0, color: yellow[500] }}/>
                <img id="pizzaSpinner" src={Spinner} className={isAnimated}  alt="pizza spinner"/>
            </div>
            <img src={Gajdos} alt="Gajdos" id="gajdos"/>
            <div id="spinBtn-container">
                <button onClick={getIngredient} disabled={isDisabled} className={isHidden}>{pizza}</button>
            </div>
        </div>
    )
}

export default SpinPizza

