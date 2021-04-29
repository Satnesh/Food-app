import logo from './logo.svg';
import './App.css';
import Data from './Data'
import {useState} from 'react'
import Categories from './Categories';
import Menu from './Menu';

function App() {
  
  const [menu,setMenu]=useState(Data)
  const[category,setCategory]=useState([])

  const filter=(category)=>{
    if(category==="all"){
      setMenu(Data)
      return;
      
    }
    
    const newItems=Data.filter((item)=>item.category===category)
    setMenu(newItems)
  }
  return (
    <div className="App">
     
        <h2>Our Menu</h2>
        <Categories  filterItems={filter}/>
        <Menu items={menu}/>
        
        
    </div>
  );
}

export default App;
