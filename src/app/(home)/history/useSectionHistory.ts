import { IChatItem } from '@/shared/types/Chat';
import { useState, useEffect } from 'react';

export const useHistorySection = () => {
  const [chatItems, setChatItems] = useState<IChatItem[]>([]);

  useEffect(() => {
    // apicall
    setChatItems([{ id: 'a', title: 'First Element', date: new Date().getTime() }]);

    return () => {
      setChatItems([]);
    };
  }, []);

  const onDelete = (id: string) => {
    console.log('🚀 ~ file: useSectionHistory.ts:17 ~ onDelete ~ id:', id);
    return;
  };

  const onLoad = (id: string) => {
    console.log('🚀 ~ file: useSectionHistory.ts:17 ~ onDelete ~ id:', id);
    return;
  };

  return {
    items: chatItems,
    onDelete,
    onLoad,
  };
};
