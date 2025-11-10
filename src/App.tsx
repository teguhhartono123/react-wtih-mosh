
//import Button from "./components/Button/Button.module.css";
import ListGroup from "./components/ListGroup";
import "./App.css";


import { CgAdidas, CgChanel, CgAppleWatch } from "react-icons/cg";
import Like from "./components/Like";

function App() {
  const items = ["Palembang", "Lampung", "Jakarta", "Ponorogo", "Bali","Bandung", "Surabaya", "Medan"];

  return (
    <div>
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