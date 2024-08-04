import Addproduct from "../Components/Addproduct"
import Listproduct from "../Components/Listproduct"
import Sidebar from "../Components/Sidebar"
import { Routes,Route } from "react-router-dom"

const Admin = () => {
  return (
    <div className='admin  flex max-lg:flex-col'>
      <Sidebar/>
<Routes>
  <Route path="/addproduct" element={<Addproduct/>}/>
  <Route path="/listproduct" element={<Listproduct/>}/>
</Routes>
    </div>
  )
}

export default Admin
