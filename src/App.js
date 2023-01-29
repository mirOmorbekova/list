import './App.css';
import { GroceryList } from './GroceryList';
import image from './list.jpg';
import imageTwo from './shopping.jpg';

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={image} width="400px" height="300" alt="list"/>
      </div>
      <div className='container'>
      <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className='container'>
        <img src={imageTwo} width="400px" height="300" alt="shopping"/>
        </div>
    </div>
  );
}

export default App;
