import { Card } from "@/components/ui/card"
import React, { FC, useState } from "react"

type Message = {
  sender: string
  text: string
  timestamp: string
}

const messages: Message[] = [
  {
    sender: "Mary Hilda",
    text: "Hello Obaidullah, I will be your case advisor for case #029290.",
    timestamp: "19:32"
  },
  {
    sender: "You",
    text: "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
    timestamp: "19:32"
  },
  { sender: "Mary Hilda", text: "Sure thing, Claren", timestamp: "19:32" },
  { sender: "You", text: "Morning. I'll try to do them. Thanks", timestamp: "19:32" }
]

export const ChatComponent: FC = () => {
  const [newMessage, setNewMessage] = useState("")

  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="overflow-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start ${message.sender === "You" ? "justify-end" : ""}`}
            >
              <div className="bg-blue-500 text-white rounded-lg px-4 py-2 m-2">
                <p>{message.text}</p>
                <p className="text-right text-xs">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center p-2">
          <input
            className="flex-grow rounded-lg border-2 p-2 mr-2"
            placeholder="Type a new message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2">Send</button>
        </div>
      </div>
    </Card>
  )
}
