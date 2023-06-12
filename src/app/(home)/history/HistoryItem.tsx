'use client';

import { IChatItem } from '@/shared/types/Chat';
import clsx from 'clsx';
import { MdAvTimer, MdCheck, MdClose, MdOutlineDelete, MdSearch } from 'react-icons/md';

type HistoryItemProps = {
  item: IChatItem;
  onDelete: (id: string) => void;
  onLoad: (id: string) => void;
  selected: boolean;
  onSelect: (id: string) => void;
};

export const HistoryItem = ({ item, selected, onSelect }: HistoryItemProps) => {
  const classSelected = clsx([
    'flex flex-row items-center justify-between mx-4 rounded-sm',
    selected ? 'bg-orange-200' : 'bg-transparent',
  ]);

  return (
    <article
      onClick={() => {
        onSelect(item.id);
      }}
      className={classSelected}
    >
      <div className="flex flex-row items-center px-4 py-2">
        <figure className="flex flex-col justify-center items-center rounded-full bg-orange-400 w-8 h-8">
          <MdSearch className="text-white text-lg" />
        </figure>
        <div className="flex flex-col text-sm px-2">
          <h2 className="font-semibold">{item.title}</h2>
          <div className="flex flex-row items-center text-xs text-gray-500">
            <MdAvTimer className="text-sm mr-1" />
            <p>{item.date}</p>
          </div>
        </div>
      </div>

      {selected && (
        <div className="text-orange-500 flex flex-row items-center justify-end gap-2 mr-4">
          <button>
            <MdCheck />
          </button>
          <button>
            <MdClose />
          </button>
        </div>
      )}
      {!selected && (
        <button className="text-orange-500 flex flex-row items-center justify-end gap-2 mr-4">
          <MdOutlineDelete />
        </button>
      )}
    </article>
  );
};
