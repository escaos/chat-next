import { IChatMessage } from '@/shared/types/Chat';
import clsx from 'clsx';
import { format } from 'date-fns';

type ChatMessageProps = IChatMessage;

export const ChatMessage = ({ username, date, message, answer }: ChatMessageProps) => {
  const headerClass = clsx([
    'flex flex-row border-b-[1px] border-gray-100 items-center px-4 gap-2 text-md',
    answer ? 'text-orange-500' : 'text-green-500',
  ]);

  const containerClass = clsx([
    'w-full flex flex-row items-center',
    answer ? 'justify-start pl-4' : 'justify-end pr-4',
  ]);

  return (
    <section className={containerClass}>
      <article className="w-4/5 rounded-md bg-white my-4">
        <div className={headerClass}>
          <h3 className="font-bold">{username}</h3>
          <span className="text-gray-300 text-xs">{format(date, 'hh:mm aaa')}</span>
        </div>
        <p className="p-4 text-sm">{message}</p>
      </article>
    </section>
  );
};
