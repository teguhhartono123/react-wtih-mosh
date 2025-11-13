
//import Button from "./components/Button/Button.module.css";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Message from "./Message";


import { CgAdidas, CgChanel, CgAppleWatch } from "react-icons/cg";
import Like from "./components/Like";
import { useState } from "react";


function App() {
  const items = ["Palembang", "Lampung", "Jakarta", "Ponorogo", "Bali","Bandung", "Surabaya", "Medan"];
  
  const [drink, setDrink] =  useState({
    title: 'Americano',
    price: 5,
  });
  const handleClick = () => {
    setDrink( {...drink, price : 7} );
  };


  return (
    <div>

      {drink.price}
      <button onClick={handleClick}> Click me </button>

      <br/><br/>
      <Message  />
      <Message  />
      <Message  />
   
      <ListGroup
        items={items}
        heading="Cities"
        onSelectitem={(item) => alert(`You selected ${item}`)}
      />

      <CgAdidas size={150} color="Blue" />
      <CgChanel size={150} color="Dark" />
      <CgAppleWatch size={150} color="Silver" />
      
      <button onClick={() => {} }>My Button </button>
      <br/><br/>


      <Like onClick={() => console.log('clicked')}/>
    </div>
  );
}

export default App;