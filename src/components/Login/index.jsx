import { useState } from "react";
import { loginUser, userRagister } from "../../service/api";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


export default function Login() {
  const navigation = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name:"",
    email: "neeraj@example.com",
    password: "MyStrongPassword123",
    reenterPassword: ""
  });
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isSignUp) {
      if (formData.password !== formData.reenterPassword) {
        setError("Passwords do not match.");
        return;
      }
    
      userRagister(formData,navigation,login)
    } else {
      loginUser(formData,navigation,login)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
       { isSignUp&&<div>
            <label htmlFor="name" className="block text-black text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>}
          <div>
            <label htmlFor="email" className="block text-black text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-black text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {isSignUp && (
            <div>
              <label htmlFor="reenterPassword" className="block text-black text-sm font-medium mb-1">
                Re-enter Password
              </label>
              <input
                id="reenterPassword"
                name="reenterPassword"
                type="password"
                value={formData.reenterPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => {
                  setIsSignUp(false);
                  setError("");
                }}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => {
                  setIsSignUp(true);
                  setError("");
                }}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
