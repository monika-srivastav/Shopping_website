import hand from '../Assets/hand.png'
import { FaArrowRight } from "react-icons/fa";
import img3 from '../Assets/img3.png'
// import './Home.css'
const Home = () => {
  return (
    <div className="home w-auto h-[98vh] max-md:h-[45vh] max-sm:h-[70vh]  max-sm:flex-col  flex bg-gradient-to-b from-pink-200 ">

      <div className="home-left flex flex-1 flex-col justify-center gap-5 max-xl:pl-10 max-sm:pl-6 max-sm:pt-20  xl:pl-[150px] leading-[1]">
        <h2 className='max-xl:text-2xl max-md:text-xl max-sm:text-lg'>NEW ARRIVALS ONLY</h2>
        <div>

          <div className="home-hand-icon flex items-center  gap-5">
            <p className='text-[#171717] xl:text-[90px] max-md:text-[50px] font-bold max-sm:text-[60px] max-xl:text-[70px]'>new</p>
            <img className='xl:w-32 max-xl:w-28 max-md:w-24 max-sm:w-28' src={hand} alt="jhh" />
          </div>
          <p className='text-[#171717] xl:text-[90px] max-md:text-[50px] font-bold max-sm:text-[60px] max-xl:text-[70px]'>collections</p>
          <p className='text-[#171717] xl:text-[90px] max-md:text-[50px] font-bold max-sm:text-[60px] max-xl:text-[70px]'>for everyone</p>
        </div>
        <div className="home-latest-btn flex justify-center text-center items-center xl:w-[280px] xl:h-[55px] max-xl:h-[50px] max-xl:w-[240px] max-md:h-[45px] max-md:w-[220px] max-sm:w-[240px] max-sm:h-[50px]  rounded-full mt-[30px] text-white max-xl:text-lg max-sm:text-lg xl:text-xl max-md:text-base font-medium bg-red-600 gap-4">
          <div>Latest collections</div>
          <FaArrowRight />
          {/* <img src={ } alt="" /> */}
        </div>
      </div>
      <div className="home-right flex flex-1  items-center justify-center ">
<img src={img3} className='w-auto xl:h-[500px] max-xl:h-[480px] max-md:h-[370px] max-sm:hidden ' alt="" />
      </div>
    </div>
  )
}

export default Home
