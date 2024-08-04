// import React from 'react'
import insta from '../Assets/insta.jfif'
import whatsapp from '../Assets/whatsapp.jfif'
import printerest from '../Assets/printerest.jfif'
import logo from '../Assets/logo.png'
const Footer = () => {
    return (
        <div className='footer flex flex-col justify-center items-center max-md:gap-5 gap-12'>
            <div className="footer-logo flex items-center max-md:items-end max-md:gap-[10px] gap-5">
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
            </div>
        </div>
    )
}

export default Footer
