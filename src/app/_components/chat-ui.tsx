"use client"
import React, { useState } from "react"

function ChatUI() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState<any>([])
  const [userInput, setUserInput] = useState("")

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  const handleSend = () => {
    if (userInput.trim() !== "") {
      setMessages([...messages, { type: "user", text: userInput }])
      setUserInput("")
      setTimeout(() => {
        setMessages([
          ...messages,
          { type: "user", text: userInput },
          { type: "bot", text: "This is a response from the chatbot." }
        ])
      }, 500)
    }
  }

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSend()
    }
  }

  return (
    <div>
      <button
        onClick={toggleChat}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
      >
        Chat with Admin Bot
      </button>
      {isChatOpen && (
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Admin Bot</p>
            <button
              onClick={toggleChat}
              className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              Close
            </button>
          </div>
          <div className="p-4 h-80 overflow-y-auto">
            {messages.map((message: any, index: any) => (
              <div key={index} className={`mb-2 ${message.type === "user" ? "text-right" : ""}`}>
                <p
                  className={`rounded-lg py-2 px-4 inline-block ${
                    message.type === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex">
            <input
              type="text"
              placeholder="Type a message"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatUI
