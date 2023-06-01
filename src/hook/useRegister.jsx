import  {useState} from 'react'
import {  useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
const useRegister = (success) => {
    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
      if (passwordType === "password") {
        setPasswordType("text");
        return;
      }
      setPasswordType("password");
    };
    const [user, setUser] = useState({
      email: "",
      password: "",
      name: "",
    });
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form validation
      if (!user.email || !user.password || !user.name) {
        toast.error("Please fill in all the fields.");
        return;
      }
    //   <button
    //   onClick={() => addToCart(items.id)}
    //   className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-deeperO rounded hover:bg-orange-400 focus:outline-none"
    // >
    //   Add to cart {''}
    //   {displayCart[items.id] > 0 && <>({displayCart[items.id]})</>}
    // </button>
      if (user.password.length < 6) {
        toast.error("Password should be at least 6 characters!");
        return; 
      }
  
      const isLogged = true;
  
      if (isLogged) {
        localStorage.setItem("user", JSON.stringify(user));
        toast.success(success);
        setTimeout(() => {
          navigate("/food");
        }, 2000);
      } else {
        toast.error("Login failed!");
      }
    };
  
  return {handleSubmit,handleInputChange,togglePassword,passwordType,user}
}

export default useRegister