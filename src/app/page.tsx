'use client';
import { useState } from 'react';
import { ChatHistory } from './(home)/ChatHistory';
import { ChatPanel } from './(home)/ChatPanel';
import { Header } from './(home)/Header';
import { ChatPrompt } from './(home)/ChatPrompt';
import { useToggle } from '@/hooks/useToggle';

export default function Home() {
  const [title, setTitle] = useState('Odama');
  const { isToggled, toggle } = useToggle();

  const handleNew = () => {
    setTitle('Nueva Conversacion');
  };

  return (
    <div className="h-screen">
      <Header toggleSide={toggle} />
      <main className="flex flex-row items-start justify-between p-8 h-[calc(100%-48px)] bg-gray-50">
        {!isToggled && (
          <aside className="w-2/3 mr-4 h-full">
            <ChatPrompt />
            <ChatHistory />
          </aside>
        )}
        <ChatPanel title={title} onNew={handleNew} />
      </main>
    </div>
  );
}
