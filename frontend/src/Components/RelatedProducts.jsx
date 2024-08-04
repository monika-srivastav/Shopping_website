// import React from 'react'
import { useState,useEffect } from 'react';
import Item from '../Components/Item'
const RelatedProducts = () => {

  const[relatedProducts,setRelatedProducts] = useState([]); 
  useEffect(() => {
   fetch('http://localhost:4000/relatedproduct')
   .then((response)=>response.json())
   .then((data)=>setRelatedProducts(data));
  }, [])


  return (
    <div className="relatedproducts flex flex-col items-center max-sm:h-[120vh] max-lg:h-[50vh] h-[100vh]">
      <h1 className='max-sm:text-[33px]'>Related Products</h1>
      <div className="h-1 rounded-xl  bg-slate-800 w-[200px] "></div>
      <div className="relatedproducts-item max-sm:grid-cols-2 max-md:gap-8 max-md:mx-[70px] max-sm:gap-8 max-sm:mx-[100px] max-lg:gap-4 max-lg:mx-24 gap-5  grid grid-cols-4 mt-12 justify-end items-end text-start mx-40">
        {relatedProducts.map((item, i) => {
           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}


      </div>
    </div>
  )
}

export default RelatedProducts
