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
    
<div  className="relative overflow-hidden min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}> 

<div className="max-w-md mx-auto mt-10 p-6  rounded-lg 
                transition duration-500 ease-in-out
                hover:shadow-2xl
                hover:bg-[#2CCEE3]
                border border-primary 
                ml-230  "  >

  <h2 className="text-3xl font-semibold text-primary-dark mb-6 text-center">
    {isLogin ? "Login" : "Register"}
  </h2>

  <form onSubmit={handleSubmit} className="flex flex-col gap-4">

    <input
      type="text"
      name="username"
      value={form.username}
      placeholder="Username"
      required
      onChange={handleChange}
      className="input input-bordered input-primary w-full transition hover:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
    />

    <input
      type="password"
      name="password"
      value={form.password}
      placeholder="Password"
      required
      onChange={handleChange}
      className="input input-bordered input-primary w-full transition hover:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
    />

    {!isLogin && (
      <>
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          required
          onChange={handleChange}
          className="input input-bordered input-primary w-full transition hover:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
        />

        <input
          type="number"
          name="age"
          value={form.age}
          placeholder="Age"
          required
          onChange={handleChange}
          className="input input-bordered input-primary w-full transition hover:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
        />

        <input
          type="text"
          name="gender"
          value={form.gender}
          placeholder="Gender"
          required
          onChange={handleChange}
          className="input input-bordered input-primary w-full transition hover:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
        />

        <input
          type="number"
          name="contact"
          value={form.contact}
          placeholder="Contact"
          required
          onChange={handleChange}
          className="input input-bordered input-primary w-full transition hover:border-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          className="file-input file-input-primary w-full transition hover:file:bg-primary-dark hover:file:text-white"
        />
      </>
    )}

    <button
      type="submit"
      className="btn btn-primary mt-4 transition hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary-light"
    >
      {isLogin ? "Login" : "Register"}
    </button>
  </form>

  <p
    onClick={() => setIsLogin(!isLogin)}
    className="mt-4 text-center text-secondary cursor-pointer hover:text-primary-dark transition"
  >
    {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
  </p>

  <Link
    to="/contact"
    className="block mt-2 text-center text-primary hover:text-primary-dark transition"
  >
    Contact us
  </Link>
</div>

</div>
  )
}

export default CardForm
