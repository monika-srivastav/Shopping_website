// import React from 'react'
// import insta from '../Assets/insta.jfif'
// import whatsapp from '../Assets/whatsapp.jfif'
// import printerest from '../Assets/printerest.jfif'
import logo from '../Assets/logo.png'
const Footer = () => {
    return (
        <div className='footer overflow-hidden flex flex-col justify-center items-center max-md:gap-5 gap-2'>
            {/* <div className="footer-logo flex items-center max-md:items-end max-md:gap-[10px] gap-5">
                <img src={logo} className='size-[100px] max-md:size-16'  alt="" />
                <p className="uppercase font-bold text-4xl max-md:text-3xl">shopper</p>
            </div>
            <ul className='fotter-links flex gap-12 text-xl  max-md:gap-5 max-md:text-lg text-slate-900'>
                <li className='cursor-pointer capitalize'>company</li>
                <li className='cursor-pointer capitalize'>products</li>
                <li className='cursor-pointer capitalize'>offices</li>
                <li className='cursor-pointer capitalize'>about</li>
                <li className='cursor-pointer capitalize'>contact</li>
            </ul>
            <div className="footer-social-icon flex gap-5">
                <div className="footer-icons-container  border border-gray-300  ">
                    <img src={insta} alt="" className='h-10 max-md:h-8' />
                </div>
                <div className="footer-icons-container p-1 border border-gray-300">
                    <img src={printerest} alt="" className='h-8 max-md:h-6' />
                </div>
                <div className="footer-icons-container   border border-gray-300">
                    <img src={whatsapp} alt="" className='h-10 max-md:h-8'  />
                </div>
               
            </div>
            <div className="footer-copyright flex flex-col items-center gap-7 w-full  bg-gradient-to-t from-slate-300  pb-3">
                <div className="hr w-[80%]  rounded-full h-[2px]  bg-stone-500"></div>
                <p className='max-md:text-base'>Copyright &copy; 2023 - All right Reserved</p>
            </div> */}




            <div className="foot-panel2 flex  w-[100%] m-0  bg-[#222f3d] text-white h-[350px] justify-evenly">
                <ul className='mt-5 '>
                    <p className='font-bold'>Get to Know Us</p>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>About Us</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>Careers</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>Press Releases</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>Shopper Science</a>
                </ul>
                <ul className='mt-5'>
                    <p className='font-bold' > Connect with Us</p>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>Facebook</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'> Twitter</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>Instagram</a>
                </ul>
                <ul className='mt-5'>
                    <p className='font-bold'> Make Money with Us</p>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>Sell on Shopper</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'> Sell under Shopper Accelerator</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'> Protect and Build Your Brand</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>Shopper Global Selling</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'> Become an Affiliate</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>Fulfilment by Shopper</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>Advertise Your Products</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>Shopper Pay on Merchants</a>

                </ul>
                <ul className='mt-5'>
                    <p className='font-bold'>Let Us Help You </p>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>COVID-19 and Shopper</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'> Your Account</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'> Returns Centre</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'> 100% Purchase Protection</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'> Shopper App Download</a>
                    <a className='block mt-[10px] text-[#dddddd] text-base'>Help  </a>
                </ul>
            </div>
          
            {/* <div className="footer-logo flex items-center mt-0 h-0 max-md:items-end max-md:gap-[10px] gap-5">
                <img src={logo} className='size-[100px] max-md:size-16' alt="" />
                <p className="uppercase font-bold text-4xl max-md:text-3xl">shopper</p>
            </div> */}

            {/* <div className="foot-panel4 bg-[#0f1111] w-full text-white">
                    <div className="pages items-center pt-6">
                        <a href="#">condition of use & sale</a>
                        <a href="#">privacy notice</a>
                        <a href="#">interest-based ads </a>

                    </div>

                    <a href="#" className="copyright flex pt-[5px] justify-center">© 1996-2023, Shopper.com, Inc. or its affiliates</a>
                </div> */}

            <div className="footer-copyright flex flex-col items-center  w-full  bg-gradient-to-t from-slate-300  pb-3">
            <div className="hr w-[95%] my-5 rounded-full h-[2px]  bg-stone-500"></div>
                <p className='max-md:text-base'>Copyright &copy; 2023 - All right Reserved</p>
            </div>

        </div>
    )
}

export default Footer
