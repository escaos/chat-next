import { IChatMessage } from '@/shared/types/Chat';
import { useState, useEffect } from 'react';

export const useChat = () => {
  const [items, setItems] = useState<IChatMessage[]>([]);

  useEffect(() => {
    // apicall
    setItems([
      { id: 1, username: 'Ana', date: new Date().getTime(), message: 'Mensaje numero uno' },
      { id: 2, username: 'Odanet', date: new Date().getTime(), message: 'Mensaje numero Dos', answer: true },
      { id: 3, username: 'Ana', date: new Date().getTime(), message: 'Mensaje numero tres' },
      { id: 4, username: 'OdaNet', date: new Date().getTime(), message: 'Mensaje numero cuatro', answer: true },
    ]);
    return () => {
      setItems([]);
    };
  }, []);

  const sendMessage = (message: string) => {
    console.log('🚀 ~ file: useChat.ts:17 ~ sendMessage ~ message:', message);
    return;
  };

  return {
    items,
    sendMessage,
  };
};
