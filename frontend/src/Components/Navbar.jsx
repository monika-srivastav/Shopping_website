import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../Assets/logo.png'
import { Link } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { ShopContext } from "../Context/ShopContext";
import { IoMdMenu } from "react-icons/io";
// import cart from '../Assets/cart.png'

const Navbar = () => {


  const [menu, setMenu] = useState('shop')
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const menu_toggle = () => {
    menuRef.current.classList.toggle('nav-menu-visible')


  }

  return (
    <div className="navbar sticky top-0 xl:w-full max-sm:gap-3   flex justify-around items-center max-md:h-14 max-sm:h-[60px] h-16 py-0 pr-2  shadow-sm bg-white  shadow-slate-400">
      <div className='nav-logo flex items-center max-sm:gap-1  max-md:gap-[10px] gap-5'>

<img src={logo} className='size-[75px] max-sm:size-[65px] max-md:size-16 ' alt="hjh" />
<p className='font-bold text-4xl max-sm:text-2xl max-md:text-3xl'>SHOPPER</p>
</div>
      <IoMdMenu onClick={menu_toggle} className="lg:hidden block size-8 max-sm:size-6 max-md:size-6 transition duration-150 " />
      <ul ref={menuRef} className='  nav-menu lg:flex justify-center max-md:h-11 max-sm:top-14 hidden items-center lg:gap-7 xl:gap-12 text-slate-900 font-medium max-sm:text-base lg:text-lg  xl:text-2xl'>
        <li className='flex flex-col justify-center gap-[3px] cursor-pointer text-center' onClick={() => {
          setMenu("shop")
        }}> <Link to='/'>Shop</Link>  {menu === "shop" ? <div className='h-1 border border-none rounded-full   w-[80%] bg-red-900 m-1.5 items-center'></div> : <></>}</li>
        <li className='flex flex-col justify-center gap-[3px] cursor-pointer text-center' onClick={() => {
          setMenu("mens")
        }}> <Link to='/mens'>Men</Link> {menu === "mens" ? <div className='h-1 border border-none rounded-full   w-[80%] bg-red-900 m-1.5 items-center'></div> : <></>}</li>
        <li className='flex flex-col justify-center gap-[3px] cursor-pointer text-center' onClick={() => {
          setMenu("womens")
        }}><Link to='/womens'>Women</Link>{menu === "womens" ? <div className='h-1 border border-none rounded-full   w-[80%] bg-red-900 m-1.5 items-center'></div> : <></>}</li>
        <li className='flex flex-col justify-center gap-[3px] cursor-pointer text-center' onClick={() => {
          setMenu("kids")
        }}>  <Link to='/kids'>Kids</Link>{menu === "kids" ? <div className='h-1 border border-none rounded-full   w-[80%] bg-red-900 m-1.5 items-center'></div> : <></>}</li>
      </ul>
      <div className="nav-login-cart max-sm:gap-6 flex justify-center items-center gap-11">

        {localStorage.getItem('auth-token')?<button className='border  py-0 h-12 w-32 max-md:h-10 max-md:w-28 max-sm:h-[35px] max-sm:w-[100px]  rounded-3xl font-medium active:bg-gray-200 border-gray-500 text-xl max-sm:text-lg text-slate-900 ' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>: <Link to='/login'> <button className='border  py-0 h-12 w-32 max-md:h-10 max-md:w-28 max-sm:h-[35px] max-sm:w-[100px]  rounded-3xl font-medium active:bg-gray-200 border-gray-500 text-xl max-sm:text-lg text-slate-900 '>Login</button></Link>}
       
        <Link to='/cart'> <AiOutlineShoppingCart className='size-8 max-md:size-6 max-sm:size-7 ' /></Link>
        <div className="count size-5 max-md:size-4 max-sm:size-4 flex justify-center items-center -mt-9 -ml-14 max-sm:-ml-[33px] max-md:-mt-8 max-sm:-mt-[32px] border rounded-xl cursor-pointer text-white max-md:text-xs max-sm:text-[12px]  bg-red-600">{getTotalCartItems()}</div>
      </div>
      {/* <img src={cart} className='size-9 font-extrabold' alt="hjh" /> */}
    </div>
  )
}

export default Navbar

