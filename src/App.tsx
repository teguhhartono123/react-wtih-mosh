import ListGroup from "./components/ListGroup";

 let items = [
    'Palembang',
    'Lampung',
    'Madiun',
    'Bali',
    'Jakarta'];

function App() {
  return <div><ListGroup items={items} heading="Cities"/></div>; 
}

export default App;