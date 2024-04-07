import './App.css';
import { data } from './data';
import Listing from './Listing';

function App() {
  const items = JSON.parse(JSON.stringify(data))
  return (
    <Listing items={items} />
  );
}

export default App;
