import { useState } from "react"

const Login_Signup = () => {

  const [state, setState] = useState("Login")

  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("Login Function Executed",formData)
     let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/from-data',
        'content-Type':'application/json',
      },
      body: JSON.stringify(formData),

    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  

  }
  const signup = async () => {
    console.log("Signup Function Executed",formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/from-data',
        'content-Type':'application/json',
      },
      body: JSON.stringify(formData),

    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className="loginSignup w-[100%] h-[100vh] max-sm:pt-16 max-md:pt-16 pt-[40px] bg-pink-200">
      <div className="loginSignup-container w-auto max-w-[500px] max-h-[500px]  bg-white m-auto max-md:p-5   py-10 px-10">
        <h1 className=" mx-0 max-md:text-3xl capitalize">{state}</h1>
        <div className="loginSignup-fields flex flex-col gap-5 mt-5">
          {state==="Sign Up"?<input type="text" name="username" value={formData.username} onChange={changeHandler} className="h-[50px]  max-md:w-[96%] max-md:ml-[10px]  w-full px-5 border border-neutral-400 outline-none text-lg " placeholder="Your Name"/>:<></>}
          <input type="email" name="email" value={formData.email} onChange={changeHandler} className="h-[50px]  max-md:w-[96%] max-md:ml-[10px]  w-full px-5 border border-neutral-400 outline-none text-lg " placeholder="Email Address" />
          <input type="password" name="password" value={formData.password} onChange={changeHandler} className="h-[50px] text-black max-md:w-[96%] max-md:ml-[10px]  w-full px-5 border border-neutral-400 outline-none text-lg " placeholder="Password" />
        </div>
        <button onClick={() => {state==="Login"?login():signup()}} className="w-full max-md:w-[96%] max-md:ml-[10px]  h-11 text-white bg-red-600 active:bg-red-500 mt-8 text-xl font-medium cursor-pointer">Continue</button>
        {state==="Sign Up"? <p className="loginSgnup-login mt-5 text-slate-900 text-base font-medium">Already have an account? <span className="text-red-600  font-semibold" onClick={()=> {setState("Login")}}>Login here</span></p>:
        <p className="loginSgnup-login mt-5 text-slate-900 text-base font-medium">Create an account? <span className="text-red-600  font-semibold" onClick={()=> {setState("Sign Up")}}>Click here</span></p>}
       
<div className="loginSignup-agree flex items-center mt-4 gap-[10px] text-slate-900 text-sm font-weight">
  <input type="checkbox" name="" id="" />
  <p>By continuing, i agree to the terms of use & privacy policy.</p>
</div>

      </div>
    </div>
  )
}

export default Login_Signup
