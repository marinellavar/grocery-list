import './App.css';
import image from './shopping.jpg';
import pic from './man.jpg';
import GroseryList from './groseryList';

function App() {
  return (
    <div className='app'>
      <div className='conteiner'>
      <img src={ image } width='200px' alt ='shopping'/>
      </div>
      <div className='conteiner'>
      <h1>Grocery List</h1>
      </div>
      <GroseryList/>
      <div className='conteiner'>
      <img src ={ pic } width="200px" alt ="man"/>
      </div>
    </div>
  );
}

export default App;
