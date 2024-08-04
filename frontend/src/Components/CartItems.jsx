import { useContext } from 'react'
import { CiSquareRemove } from "react-icons/ci";
import { ShopContext } from '../Context/ShopContext'

const CartItems = () => {
    const { getTotalCartAmount, all_product, CartItems, removeFromCart} = useContext(ShopContext);
    return (
        <div className='carditems my-16 mx-14 '>
            <div className="carditems-format-main max-sm:text-start max-sm:hidden max-md:grid-cols-3 grid grid-cols-8  capitalize   gap-0 py-4  items-center text-center  text-gray-600 text-lg max-md:text-base font-semibold">
                <p>products</p>
                <p className='col-span-3  '>title</p>
                <p className=''>price</p>
                <p className=''>quantity</p>
                <p className=''>total</p>
                <p className=''>remove</p>
            </div>
            <div className='h-0.5 bg-gray-300'></div>
            {all_product.map((e, i) => {
                if (CartItems[e.id] > 0) {

                    return <div key={i}>
                        <div className="carditems-format  max-sm:gap-8 max-sm:text-start max-sm:grid-cols-4 grid grid-cols-8   items-center text-center  py-4 text-gray-600 text-base max-md:text-sm font-medium">
                            <img src={e.image} className='carticon-product-icon h-14 ' alt="" />
                            <p className='col-span-3 max-sm:col-span-2 '>{e.name}</p>
                            <p className=''> ${e.new_price}</p>
                            <button className='cartitems-quantity w-14 h-10 max-md:w-12 max-md:h-8 border max-sm:mx-0 border-gray-300 max-xl:mx-8 max-md:mx-2 mx-12 '>{CartItems[e.id]}</button>
                            <p className='max-sm:col-span-2 '>${e.new_price * CartItems[e.id]}</p>
                            <CiSquareRemove className='carditems-remove-icon max-sm:mr-40 flex size-5 m-auto cursor-pointer' onClick={() => { removeFromCart(e.id) }} />

                        </div>

                        <div className='h-0.5 bg-gray-300'></div>
                    </div>
                }
                return null;
            })}
            <div className='cartitems-down flex  gap-20 flex-col my-20 mx-0'>
                <div className="cartitems-total  m-0">
                    <h2 className='max-md:text-3xl'>Cart Total</h2>
                    <div>
                        <div className="cartitems-total-item flex justify-between py-3 px-0">
                            <p>subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <div className='h-0.5 bg-gray-300'></div>
                        <div className="cartitems-total-item flex justify-between py-3 px-0">
                            <p>Shipping fee</p>
                            <p>free</p>
                        </div>
                        <div className='h-0.5 bg-gray-300'></div>

                        <div className="cartitems-total-item flex justify-between py-3 px-0">
                            <h4>Total</h4>
                            <h4>${getTotalCartAmount()}</h4>
                        </div>
                    </div>
                    <button className='w-60 h-14 max-md:w-56 max-md:h-12 mt-10 bg-red-600 text-white text-base max-md:text-sm font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode flex-1 text-lg max-md:text-base font-medium">
                    <p className='capitalize my-4 '>if you have a promo code, enter it here</p>
                    <div className="cartitems-promobox  w-auto max-w-[500px]   bg-gray-300 text-black">
                        <input type="text" className='border-none outline-none bg-transparent  w-[100%]  px-4' placeholder='Promo code' />
                        <button className='w-[120px] h-14 max-md:h-12  -ml-[120px] cursor-pointer bg-black  text-white '>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
