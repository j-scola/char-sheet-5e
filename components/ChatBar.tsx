import React, { useEffect, useState } from 'react';
import { Message } from '../domain';

export const ChatBar: React.FC<{
  externalMessages: Message[];
}> = ({ externalMessages }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  useEffect(() => {
    setMessages(externalMessages);
  }, [externalMessages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        new Message(input, 'YOU'),
      ]);
      setInput('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col h-full box-outline-spacing max-w-96">
      <div className="flex-grow m-2 p-4 overflow-y-auto border-b-2 border-blue-300">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4 text-sm text-wrap w-full">
            <p>{new Date(msg.timestamp).toLocaleTimeString()}</p>
            <div>
              {msg.source ? (
                <span className="font-bold">{msg.source}: </span>
              ) : null}
              <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex p-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 p-4 mr-1"
        />
        <button
          onClick={handleSend}
          className="px-3 py-1 bg-green-500 text-white rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};
