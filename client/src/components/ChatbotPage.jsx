import React, { useState } from "react";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async (event) => {
    event.preventDefault();
    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      setMessages([...messages, { text: trimmedMessage, sender: "user" }]);
      setNewMessage("");

      try {
        const response = await fetch(
          "https://llm-app-jolly-poetry-c507.redditbotnumber2.workers.dev/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ question: trimmedMessage }), 
          }
        );
        if (response.ok) {
          const data = await response.json();
          const botReply = data[0].response.response;
          setMessages((messages) => [
            ...messages,
            { text: botReply, sender: "bot" },
          ]);
        } else {
          console.error("Failed to send message: ", response.statusText);
        }
      } catch (error) {
        console.error("Failed to send message: ", error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white border rounded-lg shadow">
        <div className="border-b px-4 py-2 bg-gray-100 rounded-t-lg">
          <h3 className="text-lg font-medium text-gray-900">Chat History</h3>
        </div>
        <ul className="p-4 overflow-y-auto h-96">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`p-2 my-2 text-sm ${
                message.sender === "bot"
                  ? "bg-blue-100"
                  : "bg-green-100 self-end"
              }`}
            >
              {message.text}
            </li>
          ))}
        </ul>
        <div className="px-4 py-3 bg-gray-50 rounded-b-lg">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg"
              placeholder="Type your message here..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
