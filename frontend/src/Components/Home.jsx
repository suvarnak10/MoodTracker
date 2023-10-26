import React, { useState } from "react";
import "./Home.css";

const Home   = () => {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleVoiceInput = () => {
    // Implement voice input functionality here
  };

  const handleSendClick = () => {
    if (inputText.trim() === "") return;
    const newChat = {
      text: inputText,
      date: new Date().toLocaleString(),
    };
    setChatHistory([...chatHistory, newChat]);
    setInputText("");
  };

  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        {chatHistory.map((chat, index) => (
          <div key={index} className="chat-history-item">
            {chat.date}: {chat.text}
          </div>
        ))}
      </div>
      <div className="chat-main">
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button onClick={handleVoiceInput}>🎤</button>
          <button onClick={handleSendClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
