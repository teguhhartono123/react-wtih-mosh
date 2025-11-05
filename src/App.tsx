// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const items = ["Palembang", "Lampung", "Jakarta", "Ponorogo", "Bali","Bandung", "Surabaya", "Medan"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectitem={(item) => alert(`You selected ${item}`)}
      />
    </div>
  );
}

export default App;