// import { useState } from 'react'
import Navbar from './Components/Navbar'
import Shop_category from './Pages/Shop_category'
import Product from './Pages/Product'
import Login_Signup from './Pages/Login_Signup'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg
import Shop from './Pages/Shop'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Cart from './Pages/Cart'
import Footer from './Components/Footer';
import men_banner from './Assets/men_banner.jpg'
import women_banner from './Assets/women_banner.jpg'
import kid_banner from './Assets/kid_banner.jpg'
 
function App() {
  

  return (
    <>
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shop_category banner={men_banner} category='men'/>}/>
        <Route path='/womens' element={<Shop_category banner={women_banner} category='women'/>}/>
        <Route path='/kids' element={<Shop_category banner={kid_banner} category='kid'/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
       < Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<Login_Signup/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
