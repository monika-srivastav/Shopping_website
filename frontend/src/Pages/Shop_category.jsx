import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import Item from "../Components/Item";
import { RiArrowDropDownLine } from "react-icons/ri";

const Shop_category = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="bg-gradient-to-t from-red-300 mx-28 max-md:mx-[50px] max-sm:mx-10 max-lg:mx-[70px]">

      <img className="shop-category-banner block my-7 mx-auto w-[52%] h-60  " src={props.banner} alt="" />
      </div>
      <div className="shop-category-indexSort flex justify-between items-center max-md:mx-[55px] max-sm:mx-12 max-lg:mx-[75px] mx-32 text-base">
        <p>
          <span className="font-semibold ">Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort flex items-center text-end overflow-y-hidden rounded-full w-28 py-1 border border-gray-500 ">
          <span className="pl-4  text-base ">Sort by</span> <RiArrowDropDownLine className="text-3xl flex items-end text-end " />
        </div>
      </div>
      <div className="shop-category-products max-sm:grid-cols-2 max-md:gap-8 max-md:mx-[70px] max-sm:gap-8 max-sm:mx-[100px] max-lg:gap-4 max-lg:mx-24 gap-5  grid grid-cols-4 mt-12 justify-end items-end text-start mx-40">
        {all_product.map((item,i) => {
          if(props.category===item.category){
            return<Item key={i} id={item.id} name={item.name} image={item.image} category={item.category} new_price={item.new_price} old_price={item.old_price} />

          }
        else{
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore capitalize flex justify-center items-center my-36 p-2 mx-auto w-44 max-lg:w-40 rounded-full max-lg:text-base text-lg font-medium bg-slate-200  text-slate-900    ">explore more</div>
    </div>
  )
}

export default Shop_category
