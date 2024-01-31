import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate=useNavigate()

  const [formData,setFormData] = useState({
      email:"",
      res_name:"",
      own_name:"",
      mob_no:"",
      password:"",
      confirm_password:""
  })

  const [error,setError] = useState({
       email_error:"",
       res_error:"",
       own_error:"",
       mob_error:"",
       password_error:"",
       confirm_error:""
  })

  useEffect(()=>{console.log(error)},[error])


  const handleChange=(e)=>{
    setFormData((prev)=>{
        return{
          ...prev,
          [e.target.name]:e.target.value
        }
    })
  }

  const validateData=({email,res_name,own_name,mob_no,password,confirm_password})=>{
        const email_pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const mob_pattern=/^\+(?:[0-9] ?){6,14}[0-9]$/
        const password_pattern=/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/
        var flag=false

        if(!email_pattern.test(email)){
           setError((prev)=>{return{ 
               ...prev,
               email_error:"Invalid Email" 
           }});
           flag=true
          }
        if(!mob_pattern.test(mob_no)){
           setError((prev)=>{return{ 
               ...prev,
               mob_error:"Invalid Mobile Number" 
           }});
           flag=true
        }
        if(!password_pattern.test(password)){
           setError((prev)=>{return{ 
               ...prev,
               password_error:"Password Must Alphanumeric and 8 character long" 
           }});
           flag=true
        }
        if(res_name==="" || res_name===null){
           setError((prev)=>{return{ 
            ...prev,
            res_error:"Can't Be Empty" 
        }});
        flag=true
        }
        if(own_name==="" || own_name===null){
          setError((prev)=>{return{ 
           ...prev,
           own_error:"Can't Be Empty" 
        }});
        flag=true
        }
        if(confirm_password!==password){
          setError((prev)=>{return{ 
          ...prev,
          confirm_error:"Confirmed Password Mismatch with Password" 
        }});
        flag=true
      }
      return flag
  }
  const handleSubmit=(e)=>{
      e.preventDefault() 
      setError({
        email_error:"",
        res_error:"",
        own_error:"",
        mob_error:"",
        password_error:"",
        confirm_error:""
      })
      if(!validateData(formData))
         navigate("/otpverify")
  }



  return (
    <>
      <div class="flex h-screen flex-col justify-center px-6 py-12 lg:px-8 items-center">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <div style={{ fontFamily: "'Lobster', sans-serif" }} className="text-5xl text-primary flex justify-center"><h2>Chat-Serve</h2></div>
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" onSubmit={handleSubmit}>
            {/*Email */}
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email<b className="text-red-500 text-lg">*</b></label>
              <div class="mt-2 flex flex-col ">
                <input id="email" name="email" type="email" onChange={handleChange} value={formData.email} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm px-4 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6" />
                <p className="text-red-600">{error.email_error}</p>
              </div>
            </div>
            {/*Restaurent Name */}
            <div>
            <div class="flex items-center justify-between">
                <label for="res_name" class="block text-sm font-medium leading-6 text-gray-900">Restaurent Name<b className="text-red-500 text-lg">*</b></label>
            </div>
            <div class="mt-2 flex flex-col">
                <input id="res_name" name="res_name" type="text" onChange={handleChange} value={formData.res_name}  class="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6" />
                <p className="text-red-600">{error.res_error}</p>
              </div>
            </div>
            {/*owner Name */}
            <div>
            <div class="flex items-center justify-between">
                <label for="own_name" class="block text-sm font-medium leading-6 text-gray-900">Owner Name<b className="text-red-500 text-lg">*</b></label>
            </div>
            <div class="mt-2 flex flex-col">
                <input id="own_name" name="own_name" type="text" onChange={handleChange} value={formData.own_name}  required class="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6" />
                <p className="text-red-600">{error.own_error}</p>
            </div>
            </div>
            {/*Mobile Number*/}
            <div>
            <div class="flex items-center justify-between">
                <label for="mob_no" class="block text-sm font-medium leading-6 text-gray-900">Mobile No<b className="text-red-500 text-lg">*</b></label>
            </div>
            <div class="mt-2 flex flex-col">
                <input id="mob_no" name="mob_no" type="text" onChange={handleChange} value={formData.mob_no}  required class="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6" />
                <p className="text-red-600">{error.mob_error}</p>
            </div>
            </div>
            {/*Password Name */}
            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password<b className="text-red-500 text-lg">*</b></label>
              </div>
              <div class="mt-2 flex flex-col">
                <input id="password" name="password" type="password" onChange={handleChange} value={formData.password}  required class="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6" />
                <p className="text-red-600">{error.password_error}</p>
              </div>
            </div>
            {/*Confirmed Password */}
            <div>
              <div class="flex items-center justify-between">
                <label for="confirm_password" class="block text-sm font-medium leading-6 text-gray-900">Confirmed Password<b className="text-red-500 text-lg">*</b></label>
              </div>
              <div class="mt-2 flex flex-col">
                <input id="confirm_password" name="confirm_password" type="password" onChange={handleChange} value={formData.confirm_password}  required class="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6" />
                <p className="text-red-600">{error.confirm_error}</p>
              </div>
            </div>
            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign Up</button>
            </div>
          </form>

        </div>
      </div>
    </>
  )

}

export default SignUp