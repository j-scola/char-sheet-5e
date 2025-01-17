import React, { useState } from 'react';
import { CharacterSheet } from '../components/CharacterSheet';
import { ChatBar } from '../components/ChatBar';
import { Message } from '../domain';

export default function Home() {
  const [externalMessages, setExternalMessages] = useState<Message[]>([
    new Message(
      'Welcome to the D&D 5e Character Sheet! Find any rolls and messages here.',
      'SYSTEM'
    ),
  ]);

  const sendToChat = (text: string, source?: string) => {
    setExternalMessages((prev) => [...prev, new Message(text, source)]);
  };

  return (
    <div className="flex">
      <div className="m-4 max-w-4xl">
        <h1 className="text-xl">D&D 5e Character Sheet</h1>
        <CharacterSheet sendToChat={sendToChat} />
      </div>
      {/* w-96	width: 24rem; /* 384px */}
      <div className="h-screen p-4 fixed right-0 w-96">
        <ChatBar externalMessages={externalMessages} />
      </div>
    </div>
  );
}
