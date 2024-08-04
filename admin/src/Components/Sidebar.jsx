import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcOpenedFolder } from "react-icons/fc";
const Sidebar = () => {
  return (
    <div className='sidebar flex flex-col pt-7  gap-5 w-full max-w-56  bg-white max-lg:flex max-lg:flex-row max-lg:justify-center max-lg:w-full max-lg:max-w-none max-lg:py-7 max-lg:h-auto  max-xl:h-[100vh] xl:h-[100vh]'>
      <Link to={'/addproduct'}>
      <div className="sidebar-item flex items-center justify-center my-0 mx-5 py-2 px-2 gap-5 cursor-pointer rounded-lg bg-neutral-200 max-lg:m-0">
      <AiOutlineShoppingCart className='size-8 max-md:size-6 max-sm:size-7 ' />
        <p>Add Product</p>
      </div>
      </Link>
      <Link to={'/listproduct'}>
      <div className="sidebar-item flex items-center justify-center my-0 mx-5 py-2 px-2 gap-5 cursor-pointer rounded-lg bg-neutral-200 max-lg:m-0">
      <FcOpenedFolder className='size-8 max-md:size-6 max-sm:size-7 ' />
        <p>Product List</p>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar
