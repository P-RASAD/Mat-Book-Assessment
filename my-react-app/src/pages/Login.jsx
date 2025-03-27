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
      console.log("error: ", error);
      alert("Login failed!");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Background Image */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center items-center justify-center p-10"
        style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
      >
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">HighBridge</h1>
          <p className="mt-2 text-lg">Building the Future...</p>
          <p className="text-sm text-gray-200 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Welcome Back!</h2>
          <p className="text-gray-600 text-center mb-6">Log in to your account</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Type here..."
                className="w-full p-3 border border-gray-300 rounded-lg mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Type here..."
                className="w-full p-3 border border-gray-300 rounded-lg mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                Remember me
              </label>
              <a href="#" className="text-blue-500">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
