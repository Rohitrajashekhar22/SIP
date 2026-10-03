import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/Authapi";

function Register() {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   const handleRegister = async () => {

      try {

         const res = await registerUser({
            name,
            email,
            password
         });

         alert("Registration Successful");

         console.log(res);

         navigate("/");

      } catch (error) {

         console.error(
            "Registration Failed",
            error
         );

      }
   };

   return (

      <div>

         <h1>Register</h1>

         <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) =>
               setName(e.target.value)
            }
         />

         <br /><br />

         <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) =>
               setEmail(e.target.value)
            }
         />

         <br /><br />

         <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) =>
               setPassword(e.target.value)
            }
         />

         <br /><br />

         <button onClick={handleRegister}>
            Register
         </button>

      </div>
   );
}

export default Register;