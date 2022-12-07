import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from  'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contador from './components/Contador/Contador';
function App() {
  return (
    <div className="App">
      <Navbar color='violet'/>
      <h1>Mi tienda Online</h1>
      <Contador inicial={10}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path= '/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path= '/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
