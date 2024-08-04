import { useState, useEffect } from "react";
import Item from "./Item"
// import new_collection from '../Assets/new_collections'
const New_collections = () => {

  const[new_collection,setNew_collection] = useState([]); 
  useEffect(() => {
   fetch('http://localhost:4000/newcollections')
   .then((response)=>response.json())
   .then((data)=>setNew_collection(data));
  }, [])
  

  return (
    <div className="new-collections  flex flex-col items-center max-md:h-[50vh] max-xl:h-[180vh] max-sm:h-[200vh] h-[170vh] ">
        <h1 className="max-sm:text-[33px]">NEW COLLECTIONS</h1>
        <div className="h-1 rounded-xl  bg-gray-800 w-[200px] "></div>
        <div className="collections  max-sm:grid-cols-2 max-md:gap-8 max-md:mx-[70px] max-sm:gap-8  max-sm:mx-[100px] max-lg:gap-4 max-lg:mx-24 gap-5  grid grid-cols-4 mt-12 justify-end items-end text-start mx-40">
        {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
        </div>
      
    </div>
  )
}

export default New_collections
