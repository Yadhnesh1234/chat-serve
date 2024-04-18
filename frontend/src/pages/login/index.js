import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    role: "", // Initialize role as empty string
    email: "",
    password: ""
  })

  const [error, setError] = useState({
    role_error: "", // Add role_error state
    email_error: "",
    password_error: ""
  })

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const validateData = (email) => {
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    var flag = false

    if (!email_pattern.test(email)) {
      setError((prev) => {
        return {
          ...prev,
          email_error: "Invalid Email"
        }
      });
      flag = true
    }
    return flag
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError({
      role_error: "", // Clear role_error
      email_error: "",
      password_error: "",
    })

    // Validate role
    if (formData.role === "") {
      setError((prev) => {
        return {
          ...prev,
          role_error: "Please select a role"
        }
      });
      return;
    }

    // Validate email
    if (validateData(formData.email)) {
      return;
    }

    // Send POST request to login API
    try {
      console.log(formData)
      const response = await fetch('http://localhost:5000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Assuming successful login redirects based on role
      const data = await response.json();
      if (formData.role === "Cook") {
        navigate("/cook-home");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure
    }
  }


  return (
    <>
      <div class="flex h-screen flex-col justify-center px-6 py-12 lg:px-8 items-center">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <div style={{ fontFamily: "'Lobster', sans-serif" }} className="text-5xl text-primary flex justify-center"><h2>Chat-Serve</h2></div>
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>

          <div>
              <label for="role" class="block text-sm font-medium leading-6 text-gray-900">Role</label>
              <div class="mt-2 flex flex-col">
                <select id="role" name="role" onChange={handleChange} value={formData.role} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm px-4 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6">
                  <option value="">Select Role</option>
                  <option value="Manager">Manager</option>
                  <option value="Cook">Cook</option>
                </select>
                <p className="text-red-600">{error.role_error}</p>
              </div>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2 flex flex-col">
                <input id="email" name="email" type="email" onChange={handleChange} value={formData.email} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm px-4 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6" />
                <p className="text-red-600">{error.email_error}</p>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="text-sm">
                  <a href="/" class="font-semibold  text-primary hover:text-orange-500">Forgot password?</a>
                </div>
              </div>
              <div class="mt-2 flex flex-col">
                <input id="password" name="password" type="password" onChange={handleChange} value={formData.password} required class="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-orange-600 sm:text-sm sm:leading-6" />
                <p className="text-red-600">{error.password_error}</p>
              </div>
            </div>

            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign in</button>
            </div>
          </form>

        </div>
      </div>
    </>
  )

}

export default Login