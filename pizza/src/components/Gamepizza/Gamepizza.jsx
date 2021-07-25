import React from 'react';


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
    },
    {   
        
        name: "No Ideas",
        toppings: "Delicious pizza with our special selection of ingredients",
        price:"10"
    },

];

function getpizza () {
    console.log("click")
    return (
        pizzas.map((pizza, index) => {
            console.log(pizza.name)
            return (
                <div className="onePizza">
                    <h3>{pizza.name}</h3>
                    <p>{pizza.toppings}</p>
                    <p className="price">{pizza.price}</p>
                    
                </div>
                
            )
            
        })
    )
}

function Gamepizza() {

    

    return (
        <>
          <h1>Win a free pizza! Play this game now!</h1>
          <button onClick ={ () => getpizza() } >Show me the pizza</button>
         
        </>
    )
}

export default Gamepizza;
