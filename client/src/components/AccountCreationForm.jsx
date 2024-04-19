import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountCreationForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    dob: "",
    password: "",
    terms: false,
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.terms) {
      try {
        const response = await fetch(
          "http://127.0.0.1:3000/users/create_account",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        if (response.ok) {
          const result = await response.json();
          navigate("/login");
          alert(result.message);
        } else {
          const error = await response.json();
          alert(error.message);
        }
      } catch (error) {
        console.error("Error during account creation:", error);
        alert("Failed to create account. Please try again.");
      }
    } else {
      alert("You must agree to the terms and conditions.");
    }
  };

  return (
    <div className="min-h-screen bg-teal-500 flex justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 m-4">
        <h2 className="text-2xl font-bold mb-10 text-gray-800">
          Create your account
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
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
          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-teal-600 text-white rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountCreationForm;
