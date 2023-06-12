import { useState } from 'react';
import { HistoryItem } from './history/HistoryItem';
import { useHistorySection } from './history/useSectionHistory';

export const ChatHistory = () => {
  const { items, onDelete, onLoad } = useHistorySection();
  const [selectedKey, setSelectedKey] = useState<string>();

  return (
    <section className="rounded-md pb-4 h-3/4 border-[1px] border-gray-200 shadow-md shadow-gray-100 bg-white">
      <h1 className="font-bold pt-4 px-4 pb-2 mb-4 border-b-[1px] border-b-gray-400">Historial de Busquedas</h1>
      {items.map((item) => (
        <HistoryItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onLoad={onLoad}
          selected={selectedKey === item.id}
          onSelect={(id) => setSelectedKey(id)}
        />
      ))}
    </section>
  );
};
