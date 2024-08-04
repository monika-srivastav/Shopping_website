import { useState, useEffect } from "react"
import { CiSquareRemove } from "react-icons/ci";
const Listproduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => { setAllproducts(data) });
  }
  useEffect(() => {

    fetchInfo();

  }, [])

  const remove_product = async (id) =>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='listproduct flex flex-col items-center w-full h-[740px]  px-12 max-sm:px-3 m-7 rounded-md bg-white max-lg:box-border max-lg:w-[95%] max-lg:my-5 max-lg:mx-auto '>
      <h2 className="py-5"> All Products List</h2>
      <div className="listproduct-format-main w-full   grid grid-cols-8  capitalize px-0  gap-5 py-5  items-center text-center    text-base max-lg:py-4 max-lg:text-sm font-semibold">
        <p>Products</p>
        <p className="col-span-3">Title</p>
        <p>old price</p>
        <p>new price</p>
        <p className="">category</p>
        <p className="">remove</p>
      </div>
      <div className="listproduct-allproducts overflow-y-auto w-full">
        <div className='h-0.5 bg-gray-300 w-full'></div>

        {allproducts.map((product, i) => {
          return<>
           <div key={i} className="listproduct-formate-main w-full   grid grid-cols-8  capitalize px-0  gap-5 py-5  items-center text-center    text-base max-lg:py-4 max-lg:text-sm font-medium ">

            <img src={product.image} className="listproduct-product-icon h-20 max-lg:h-12 w-auto" alt="" />
            <p className="col-span-3">{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <CiSquareRemove className='listproduct-remove-icon  max-sm:mr-40 flex size-5 m-auto cursor-pointer' onClick={() => { remove_product(product.id) }} />

          </div>
            <div className='h-0.5 bg-gray-300 w-full'></div>
            </>
      })}
      </div>
    </div>
  )
}

export default Listproduct
