import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios';
const API_BASE = "https://card-back-end-dw29.onrender.com/api/cards";
import backgroundImg from '../assets/background_img.jpg';

const Profile = () => {
    const params = useParams();
    const {id} = params;
    const [card, setCard] = useState("");

    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(`${API_BASE}/${id}`)
        .then((res)=> setCard(res.data))
        .catch((error)=> console.error(error));
    },[id]);

    const handleLogout = () => {
        localStorage.removeItem("card");
        navigate("/card");
    }
  return (
    <>

    {/* -------------------------------------------------------------- */}

<div
      className="relative overflow-hidden min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      
      <div
        className="max-w-lg mx-auto mt-10 p-6 rounded-lg shadow-lg
                   border border-[#d4af7f] bg-blue/50 backdrop-blur-md
                   transition duration-500 ease-in-out hover:shadow-xl
                   flex flex-col items-center text-center"
      >
     
        <div className="relative group p-6 mb-6 rounded-xl overflow-hidden transition duration-700 ease-in-out transform hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffe5b4] to-[#c7c5f5] rounded-xl opacity-60 group-hover:from-[#dc8412] group-hover:to-[#6674cd] transition-all duration-700 blur-sm rotate-2 scale-110 z-0"></div>

          <div className="relative z-10 text-[#2c2c2c] group-hover:text-blue transition-all duration-700">
            <h2 className="text-3xl font-semibold text-[#2c2c2c] mb-4 group-hover:text-white">
              Welcome {card.username}
            </h2>

            <p className="mb-1"><strong>Age:</strong> {card.age}</p>
            <p className="mb-1"><strong>Gender:</strong> {card.gender}</p>
            <p className="mb-1"><strong>Email ID:</strong> {card.email}</p>
            <p className="mb-4"><strong>Contact No:</strong> {card.contact}</p>
          </div>
        </div>

        
       {card.image && (
  <div
    className="relative inline-block mb-4 p-[10px]"
    style={{ margin: "10px" }}
  >
    <div
      className="absolute inset-0 rounded-lg
                 bg-gradient-to-r from-[#cc753f] to-[#002147]
                 transition-transform duration-700 ease-in-out
                 pointer-events-none"
      style={{ borderRadius: '0.5rem' }}
      id="border-rotate"
    ></div>

    <img
      src={card.image}
      alt={card.username}
      width="200"
      className="relative rounded-lg border-4 border-transparent cursor-pointer"
      style={{ position: "relative", zIndex: 10 }}
      onMouseEnter={(e) => {
        e.currentTarget.previousSibling.style.transform = 'rotate(180deg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.previousSibling.style.transform = 'rotate(0deg)';
      }}
    />
  </div>
)}
       
        <div className="relative inline-block p-[2px] rounded-lg mb-4 group">
 
  <div
    className="absolute inset-0 rounded-lg 
               bg-gradient-to-r from-[#cc753f] to-[#002147] 
               transition-transform duration-700 ease-in-out 
               group-hover:rotate-180 pointer-events-none"
    style={{ borderRadius: '0.5rem' }}
  ></div>

  <button
    onClick={handleLogout}
    className="relative z-10 px-4 py-2 bg-[#191889] text-white font-semibold 
               rounded-lg shadow-md hover:bg-[#cc753f]  hover:text-[#002147]
               transition focus:outline-none focus:ring-4 focus:ring-[#ffccd1]"
  >
    Logout
  </button>
</div>

      </div>
    </div>

    </>
   
  )
}

export default Profile
