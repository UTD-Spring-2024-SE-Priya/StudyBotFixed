import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Flashcards = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [flashcards, setFlashcards] = useState([]);

  const user_email = localStorage.getItem("email"); // Retrieve email from local storage

  console.log(user_email);
  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    const response = await fetch(
      `http://127.0.0.1:3000/users/flashcards?email=${encodeURIComponent(
        user_email
      )}`
    );
    const data = await response.json();
    const visibleFlashcards = data.flashcards.map((flashcard) => ({
      ...flashcard,
      visible: false,
    }));
    setFlashcards(visibleFlashcards);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = async () => {
    const flashcard = { question, answer, email: user_email };
    const response = await fetch(`http://127.0.0.1:3000/users/flashcards`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(flashcard),
    });
    if (response.ok) {
      fetchFlashcards();
      alert("Flashcard create successfully");
    }
  };

  const toggleVisibility = (index) => {
    setFlashcards((currentFlashcards) =>
      currentFlashcards.map((card, i) =>
        i === index ? { ...card, visible: !card.visible } : card
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Flashcards</h1>
      <div className="mb-8 p-4 shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Create a New Flashcard</h2>
        <div>
          <label
            htmlFor="question"
            className="block text-sm font-medium text-gray-700"
          >
            Question
          </label>
          <input
            type="text"
            id="question"
            name="question"
            value={question}
            onChange={handleQuestionChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter the question for the flashcard"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="answer"
            className="block text-sm font-medium text-gray-700"
          >
            Answer
          </label>
          <textarea
            id="answer"
            name="answer"
            rows="3"
            value={answer}
            onChange={handleAnswerChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter the answer for the flashcard"
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Create Flashcard
        </button>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-3">Previous Flashcard Sets</h2>
        <div className="space-y-4">
          {flashcards.map((flashcard, index) => (
            <div
              key={flashcard._id}
              onClick={() => toggleVisibility(index)}
              className="cursor-pointer p-4 bg-gray-100 rounded shadow"
            >
              <h3 className="text-sm font-medium text-gray-700">
                {flashcard.question}
              </h3>
              {flashcard.visible && (
                <p className="text-sm text-gray-500 mt-2">
                  Answer: {flashcard.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
