import { useState } from 'react'
import header from './componentes/Header'
import rodape from '../src/components/footer'
import './App.css'
//import AppRoutes from '../src/routes'

function App() {
  const [categorys, setcategory] = useState('');
  const [type, settype] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const category = await fetch('https://opentdb.com/api.php?amount=30&category=15 ');
        const categorydata = await category.json();
        setcategory(categorydata.data.categorys);


        const typesresp = await fetch('https://opentdb.com/api.php?amount=30&category=15 ');
        const typedata = await typesresp.json();
        settype(typedata.data.type);
      }catch (error) {
        console.error('Error fetching data:', error);
    }
    }
  
        fetchData();
      }, []);

  return (
    


<div className="App">
      <h1>MEMES</h1>+++
      <div className="category-container">

      <div className="cat">
         
          <h2>{categorys[currentcategoryIndex].category}</h2>
          <p>{quote}</p>


          <h2>{type[currenttypeIndex].type}</h2>
          <p>{quote}</p>
        </div> </div> </div>
      
    
  );
}

export default App
