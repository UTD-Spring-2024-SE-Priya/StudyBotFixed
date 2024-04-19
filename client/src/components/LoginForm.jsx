import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        // Using navigate to pass state to the /studybot route
        localStorage.setItem('email', result.email);  // Save email to local storage

        navigate("/studybot", { state: { email: result.email } });
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Failed to login. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-teal-500 flex justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 m-4">
        <h2 className="text-2xl font-bold mb-10 text-gray-800">
          Login to your account
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full p-3 bg-teal-600 text-white rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
