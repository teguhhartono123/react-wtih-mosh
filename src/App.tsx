import ListGroup from "./components/ListGroup";

 let items = [
    'Palembang',
    'Lampung',
    'Madiun',
    'Bali',
    'Jakarta'];

    const handleSelectItem = (item:string) => {
      console.log(item);
    }

function App() {
  return <div><ListGroup items={items} heading="Cities" onSelectitem={handleSelectItem}/></div>; 
}

export default App;