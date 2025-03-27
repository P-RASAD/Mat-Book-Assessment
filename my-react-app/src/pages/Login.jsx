import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://your-api.com/login", { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
        console.log('error: ', error);
      alert("Login failed!");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex w-1/2 bg-cover bg-center items-center justify-center p-10" 
           style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">HighBridge</h1>
          <p className="mt-2 text-lg">Building the Future...</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Welcome Back!</h2>
          <p className="text-gray-600 text-center mb-6">Log in to your account</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" checked={remember} onChange={() => setRemember(!remember)} />
                Remember me
              </label>
              <a href="#" className="text-blue-500">Forgot Password?</a>
            </div>

            <button type="submit" className="w-full bg-red-500 text-white p-3 rounded-lg">Log In</button>

            <div className="text-center text-gray-500 my-4">Or</div>

            <button className="w-full border p-3 rounded-lg flex items-center justify-center">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
              Log In with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
