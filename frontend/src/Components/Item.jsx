import { Link } from "react-router-dom"


const Item = (props) => {
  return (
    <div className="item hover:scale-110 max-sm:w-40 max-sm:h-[290px] max-md:h-[325px] max-md:w-[120px] mt-5 max-lg:h-[310px] max-lg:w-[165px] h-[400px] max-xl:h-[330px] xl:w-[224px] ">
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} className=" max-xl:w-[165px]  max-md:w-[120px] max-xl:h-56 xl:w-56 xl:h-64  max-md:h-[150px] max-sm:w-40 max-sm:h-[200px]  border  border-zinc-500" alt="" /></Link>
      <p className="mt-1.5  max-sm:text-base max-md:text-lg xl:text-2xl max-xl:text-xl">{props.name}</p>
      <div className="item_prices flex  py-1   gap-2">
        <div className="item_price-new md:text-base max-sm:text-base   max-xl:text-xl xl:text-2xl max-md:text-lg text-lg font-semibold text-slate-900">${props.new_price}</div>
        <div className="item_price-old max-sm:text-base  max-xl:text-xl text-gray-500 max-md:text-lg  xl:text-2xl text-lg font-medium line-through">${props.old_price}</div>
      </div>
    </div>
  )
}

export default Item
