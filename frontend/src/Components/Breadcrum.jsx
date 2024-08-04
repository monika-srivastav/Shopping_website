import { MdArrowForwardIos } from "react-icons/md";

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum flex items-center gap-1 max-xl:text-[15px] max-md:text-sm max-sm:text-xs text-base capitalize font-semibold max-md:mx-7 max-sm:mx-7 max-md:mt-12 max-sm:mt-12 max-xl:mx-10 my-8 mx-14'>
      HOME <MdArrowForwardIos />  SHOP<MdArrowForwardIos /> {product.category} <MdArrowForwardIos /> {product.name}
    </div>
  )
}

export default Breadcrum
