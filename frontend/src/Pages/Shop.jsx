import Home from "../Components/Home"
import New_collections from "../Components/New_collections"
import News_letter from "../Components/News_letter"
import Offers from "../Components/Offers"
import Popular from "../Components/Popular"


const shop = () => {
  return (
    <div>
      <Home/>
      <Popular/>
      <Offers/>
      <New_collections/>
      <News_letter/>
      
    </div>
  )
}

export default shop
