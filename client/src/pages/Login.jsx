import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../api/Authapi";

function Login() {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   const handleLogin = async () => {

      try {

         const res = await loginUser({
            email,
            password,
         });

         localStorage.setItem("token", res.data.token);

         localStorage.setItem(
            "user",
            JSON.stringify(res.data.user)
         );

         alert(res.data.message);

         navigate("/dashboard");

      } catch (error) {

         alert(
            error.response?.data?.message || "Login failed"
         );

      }
   };

   return (

      <div>

         <h1>Login</h1>

         <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />

         <br /><br />

         <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />

         <br /><br />

         <button onClick={handleLogin}>
            Login
         </button>

         <p>
            Don't have an account?
            <Link to="/register"> Register here</Link>
         </p>

      </div>
   );
}

export default Login;