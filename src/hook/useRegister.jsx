import  {useState} from 'react'
const useRegister = () => {
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
  
   
  
  return {handleInputChange,togglePassword,passwordType,user}
}

export default useRegister