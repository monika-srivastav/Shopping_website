// import React from 'react'

const News_letter = () => {
  return (
    <div className="news-letter  w-[78%] xl:h-[40vh] max-lg:h-[24vh] max-md:h-[30vh] flex flex-col items-center justify-center gap-7 m-auto px-24 max-md:px-16  mb-40 bg-gradient-to-b from-pink-200">
      <h1 className="pt-8 xl:text-[47px] max-xl:text-[35px] max-md:text-[17px]  max-lg:text-[27px] font-bold capitalize">Get exclusive offers on your  email</h1>
      <p className="text-slate-800 xl:text-[22px] max-xl:text-[16px] max-md:text-[10px]  max-md:px-16 max-md:-mt-6 max-lg:text-[13px] capitalize font-semibold">subscribe to our newsletter and stay updated</p>
      <div className="flex items-center justify-between bg-white xl:w-[750px] max-md:w-[250px] max-xl:w-[550px] max-lg:w-[430px] max-md:h-8 xl:h-14 max-lg:h-10 max-xl:h-12 rounded-full
      border border-gray-500">

      <input type="email" className="w-[500px] mx-5 max-md:w-[100px] ml-30px text-gray-800 xl:text-base max-xl:text-[16px]  max-lg:text-[14px] outline-none border border-none" placeholder="Your Email Id"/>
      <button className="xl:w-44 xl:h-14 max-md:w-[80px] max-lg:h-10 max-xl:h-12 max-md:h-8 max-lg:w-[166px] max-xl:w-[170px] rounded-full bg-black text-white xl:text-base max-xl:text-base max-md:text-xs max-lg:text-sm cursor-pointer">subscribe</button>
      </div>
    </div>
  )
}

export default News_letter
