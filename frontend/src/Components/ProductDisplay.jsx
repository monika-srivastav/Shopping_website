
import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext) ////import addtocart function throught our context api.
  return (
    <div className='productdisplay flex max-sm:flex-col max-xl:mx-10 max-md:mx-4  mx-16'>
      <div className="productdisplay-left max-sm:gap-[10px] max-sm:mx-12 max-sm:flex-row max-md:flex-col-reverse  items-center w-full flex max-xl:gap-2 gap-3">
        <div className="productdisplay-img-list max-sm:flex-col max-sm:gap-2  flex max-md:flex-row max-md:gap-1 flex-col gap-3">
          <img src={product.image} className="h-32 max-xl:h-24 max-md:h-[60px] max-sm:h-20 w-auto border  border-zinc-500 "  />
          <img src={product.image} className="h-32 max-xl:h-24 max-md:h-[60px] max-sm:h-20 w-auto border  border-zinc-500  "  />
          <img src={product.image} className="h-32 max-xl:h-24 max-md:h-[60px] max-sm:h-20 w-auto border  border-zinc-500  " />
          <img src={product.image} className="h-32 max-xl:h-24 max-md:h-[60px] max-sm:h-20 w-auto border  border-zinc-500  " />
        </div>
        <div className="productdisplay-main-img ">
          <img src={product.image} className="productdisplay-main-img w-auto max-xl:h-[420px] max-sm:h-[345px]  max-md:h-[340px] h-[548px] border  border-zinc-500" />
        </div>
      </div>
      <div className="productdisplay-right mx-8 max-md:mx-2 max-sm:m-5 flex flex-col">
        <h2 className="text-[26px] max-sm:mt-4 max-sm:text-[23px] max-xl:text-[22px] max-md:text-[17px]">{product.name}</h2>
        <div className="productdisplay-right-stars flex items-center mt-3 gap-1 max-xl:mt-2  max-md:mt-1 text-yellow-400 max-md:text-xs max-sm:text-base text-sm">
          <FaStar />
          <FaStar  />
          <FaStar  />
          <FaStar  />
          <FaStarHalfAlt />

          <p className="text-black">(122)</p>
        </div>
        <div className="productdisplay-right-prices  max-sm:text-xl flex my-3 gap-7 text-xl  max-md:text-lg ">
          <div className="productdisplay-right-price-old text-gray-500 line-through">${product.old_price}</div>
          <div className="productdisplay-right-price-new text-red-600 font-bold">${product.new_price}</div>

        </div>
        <div className="productdisplay-right-description text-base max-sm:text-sm max-md:text-xs max-xl:text-sm">
          Lorem ipsum dolor, possimus tenetur quasi ut a reiciendis nostrum consectetur totam, dolorem accusamus cumque officia, facere atque odio. Repellendus, voluptatibus esse!.
        </div>
        <div className="productdisplay-right-size">
          <h3 className="mt-5 max-md:mt-3 max-sm:text-xl max-xl:mt-4 max-xl:text-xl max-md:text-base">Select Size</h3>
          <div className="productdisplay-right-sizes flex max-xl:my-4  max-md:my-3 max-md:gap-4 max-sm:gap-3  text-base max-md:text-sm my-5 gap-5">
            <div className="py-4 px-5 max-xl:py-3 max-xl:px-4  max-md:py-2 max-md:px-3 max-sm:py-3 max-sm:px-4 border  border-gray-300 rounded-md cursor-pointer bg-zinc-100">S</div>
            <div className="py-4 px-5 max-xl:py-3 max-xl:px-4  max-md:py-2 max-md:px-3 max-sm:py-3 max-sm:px-4 border  border-gray-300 rounded-md cursor-pointer bg-zinc-100">M</div>
            <div className="py-4 px-5 max-xl:py-3 max-xl:px-4  max-md:py-2 max-md:px-3 max-sm:py-3 max-sm:px-4 border  border-gray-300 rounded-md cursor-pointer bg-zinc-100">L</div>
            <div className="py-4 px-5 max-xl:py-3 max-xl:px-4  max-md:py-2 max-md:px-3 max-sm:py-3 max-sm:px-4 border  border-gray-300 rounded-md cursor-pointer bg-zinc-100">XL</div>
            <div className="py-4 px-5 max-xl:py-3 max-xl:px-4  max-md:py-2 max-md:px-3 max-sm:py-3 max-sm:px-4 border  border-gray-300 rounded-md cursor-pointer bg-zinc-100">XXL</div>
          </div>
        </div>
      <button className=" uppercase max-md:w-32 max-sm:w-36 max-md:py-2 max-md:mb-3 max-md:text-xs max-xl:w-36 max-sm:py-4 max-sm:text-sm max-xl:py-3 max-xl:mb-4 max-xl:text-sm w-40 py-4 text-base  mb-5 font-semibold text-white bg-red-600 active:bg-red-500 cursor-pointer" onClick={()=>{addToCart(product.id)}}>add to cart</button>
      <p className="productdisplay-right-category mt-2 max-xl:mt-1  max-md:text-sm max-sm:text-base text-lg max-xl:text-[15px] capitalize"> <span className="font-semibold">Category :</span> women, t-shirt, crop top</p>
      <p className="productdisplay-right-category mt-2 max-xl:mt-1 max-md:text-sm  max-sm:text-base text-lg max-xl:text-[15px] capitalize"> <span className="font-semibold">Tags :</span> Modern, latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
