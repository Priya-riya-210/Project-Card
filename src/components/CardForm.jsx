import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import backgroundImg from '../assets/Login_Background.avif';
const API_BASE = "https://card-back-end-dw29.onrender.com/api/cards";

const CardForm = () => {



const[isLogin, setIsLogin] = useState(false);
const[form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    gender: "",
    contact: "",
    image: ""
})

const navigate = useNavigate();

const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});

};

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        if(isLogin){
            const res = await axios.post(`${API_BASE}/login`,{
                username : form.username,
                password: form.password
            });
            localStorage.setItem("card", JSON.stringify(res.data.card))
            navigate(`/profile/${res.data.card._id}`)
        }else{
             const formData = new FormData();
             formData.append("username", form.username);
             formData.append("password", form.password);
             formData.append("email", form.email);
             formData.append("age", form.age);
             formData.append("gender", form.gender);
             formData.append("contact", form.contact);
             formData.append("image", form.image);

            const res = await axios.post(`${API_BASE}/`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            console.log(formData)
            console.log(res.data);
            setIsLogin(true)
            setForm({
                username: "",
                password: "",
                email: "",
                age: "",
                gender: "",
                contact: "",
                image: ""
            })
            
        }
    }catch(error){
        console.error(error);
          alert("Login/Register failed. Please check your credentials or try again.");
    }
}

  return (
    
 <div className="relative min-h-screen flex items-center justify-center ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dspucsmpo/video/upload/v1750171589/Background_video_euhhlu.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

<div className="relative z-10  bg-white-10/10 border border-blue-300 p-8 rounded-xl shadow-xl max-w-md w-full text-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
          />

          {!isLogin && (
            <>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
              />

              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="Age"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
              />

              <input
                type="text"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                placeholder="Gender"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
              />

              <input
                type="number"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Contact"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
              />

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 backdrop-blur-md "
              />
            </>
          )}

          <button
            type="submit"
            className="bg-white-600 text-white py-2 rounded hover:bg-blue-700 transition border-2"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 text-center text-blue-600 cursor-pointer hover:underline"
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>

        <Link
          to="/contact"
          className="block mt-2 text-center hover:underline text-blue-600"
        >
          Contact us
        </Link>
      </div>
    </div>
  )
}

export default CardForm;

