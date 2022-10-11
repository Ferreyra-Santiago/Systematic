import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

//viws
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './views/Cart/Cart';
import CartProvider from './CartContex';
import Product from './views/product/Product';
import Footer from './components/Footer/Footer';
import Category from "./views/Category/Category"
import Checkout from './views/Checkout/Checkout';
import PreguntasFrecuentes from './views/PreguntasFrecuentes/PreguntasFrecuentes';








function App() {
    return (
<Router>
  <CartProvider>
<div className='bg-slate-50'>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
        <Route path='/PreguntasFrecuentes' element={<PreguntasFrecuentes/>} />
        <Route path='/Category/:Categoria' element={<Category/>}/>
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>

      </div>
<Footer/>
    </CartProvider>
</Router>
    

  );
}

export default App;
