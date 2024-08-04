
import logo from '../assets/logo.png'
import profile from '../assets/profile.jfif'
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = () => {
    return (
        <div className="navbar sticky top-0 xl:w-full   flex justify-between items-center max-md:h-14 max-sm:h-[60px]  h-16 px-14  mb-[1px]  bg-white shadow-sm  shadow-slate-400">
            <div className='nav-logo flex items-center  '>

                <img src={logo} className='size-[75px] max-sm:size-[65px] max-md:size-16 ' alt="hjh" />
               <div className='flex-col gap-0 '>
                 <div className='font-bold text-3xl max-sm:text-xl py-0 max-md:text-3xl '>SHOPPER</div>
                <div  className='text-red-600 text-sm px-2 py-0 font-semibold'>Admin Panel</div>
                </div>
            </div>
            <div className="nav-profile flex items-center gap-2">
               
                <img src={profile} className='size-[55px] rounded-full max-sm:size-[45px] max-md:size-10 ' alt="" />
                <IoMdArrowDropdown className='' />
            </div>
        </div>

    )
}

export default Navbar
