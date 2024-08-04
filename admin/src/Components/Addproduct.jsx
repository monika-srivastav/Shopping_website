import upload_area from '../assets/upload_area.png'
import { useRef, useState } from 'react'

const Addproduct = () => {
  const [image, setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: " ",
    new_price: "",
    old_price: ""
  })
  const Ref = useRef()

  const imageHandler = (e) => {           ////UPLAOD IMG FROM FILE
    setImage(e.target.files[0]);

    Ref.current.style.backgroundColor = "white";

  }

  const changeHandler = (e) => {            ///////UPDATE OUR DATA
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  }

  const Add_product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append('product',image);
    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp)=> resp.json()).then((data)=>{responseData=data});

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=> resp.json()).then((data)=>{
        data.success?alert("Product Added"):alert("Failed")
      })
    }

  }
  return (
    <div className='add-product  box-border w-full max-w-[800px] py-7 px-12 my-5 mx-7 bg-white rounded-md capitalize max-lg:w-auto max-lg:p-7 max-lg:m-5'>
      <div className="addproduct-itemfield w-full   text-gray-900 text-base">
        <p className='py-2' >product title</p>
        <input type="text" value={productDetails.name} onChange={changeHandler} name="name" placeholder="Type here..." className='box-border h-[50px] rounded-md    w-full  px-4 border border-neutral-400 outline-none text-base ' />
      </div>
      <div className="addproduct-price flex gap-10">
        <div className="addproduct-itemfield  w-full text-gray-900 text-base">
          <p className='py-2' >Price</p>
          <input type="text" value={productDetails.old_price} onChange={changeHandler} name="old_price" placeholder="Type here..." className='box-border h-[50px] rounded-md  w-full  px-4 border border-neutral-400 outline-none text-base ' />
        </div>
        <div className="addproduct-itemfield  w-full text-gray-900 text-base">
          <p className='py-2'> Offer Price</p>
          <input type="text" value={productDetails.new_price} onChange={changeHandler} name="new_price" placeholder="Type here..." className='box-border h-[50px] rounded-md    w-full  px-4 border border-neutral-400 outline-none text-base ' />
        </div>
      </div>
      <div className="addproduct-itemfield w-full text-gray-900 text-base">
        <p className='py-2'>Product Category</p>
        <select name="category" value={productDetails.category}  onChange={changeHandler} className="add-product-selector h-[40px] rounded-md    w-auto  px-3 outline-none border border-neutral-400  text-base">
          <option value="">Select a  option...</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield w-28 bg-gradient-to-b from-slate-200 to-red-100 rounded-xl "  >
        <label htmlFor="file-input"  >
          <img ref={Ref} src={image ? URL.createObjectURL(image) : upload_area} className="addproduct-thumnail h-28 w-28   object-contain my-3" alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="img" id="file-input" hidden />
      </div>
      <button onClick={() => {Add_product()}} className="addproduct-btn mt-5 border-neutral-400 bg-blue-800 active:bg-blue-700 cursor-pointer font-medium text-white text-lg  rounded-md  w-32 h-[40px]">ADD</button>

    </div>
  )
}

export default Addproduct
