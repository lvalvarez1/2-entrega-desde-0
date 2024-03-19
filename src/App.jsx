
import 'bootstrap/dist/css/bootstrap.min.css';

//import Navbar from './components/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
/*import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'*/

import Navbar2 from './components/Navbar2.jsx';
import Cards from './components/Cards.jsx';




function App() {

  return (
    <>
    <Navbar2 />

   <div className='mt-40'>
   <Cards/>
   </div>
    
    </>
  )
}

export default App
