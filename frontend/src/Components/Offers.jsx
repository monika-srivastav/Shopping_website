import exclusive from '../Assets/exclusive.png'
const Offers = () => {
  return (
    <div className="offers w-[78%] xl:h-[70vh] max-xl:h-[60vh] max-md:h-[30vh]  max-lg:h-[25vh] flex m-auto px-24 xl:mb-28 max-xl:mb-24 max-lg:mb-20 bg-gradient-to-b from-pink-200">
      <div className="offers-left w-full flex flex-1 flex-col justify-center max-md:-mx-8 ">
        <h1 className='p-1 xl:text-5xl max-xl:text-[42px]  max-lg:text-[30px] max-md:text-lg max-md:p-0  font-bold w-full'>Exclusive</h1>
        <h1 className='p-1 xl:text-5xl max-xl:text-[42px] max-lg:text-[30px]  max-md:text-lg max-md:p-0 font-bold  w-full'>Offers For You </h1>
        <p className='text-slate-950 xl:text-xl max-xl:text-base max-lg:text-sm max-md:text-[10px] flex font-semibold w-full max-md:p-0 pl-2'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='xl:w-52 xl:h-12 max-xl:w-44 max-md:w-[124px] max-md:h-7 max-xl:h-10 max-lg:w-36 max-lg:h-9 mt-[30px]  rounded-full bg-red-600 text-white xl:text-xl max-xl:text-lg max-lg:text-base max-md:text-xs font-medium cursor-pointer'>Check Now</button>
      </div>
      <div className="offers-right flex flex-1 items-center justify-end xl:pt-10 max-xl:pt-8  ">
        <img src={exclusive} className=' xl:h-[500px] max-xl:h-[380px] max-lg:h-[340px] max-md:h-[240px] max-md:-mr-16' alt="" />
      </div>
    </div>
  )
}

export default Offers
