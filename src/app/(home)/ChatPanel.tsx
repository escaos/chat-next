import { ChatHeader } from './chatPanel/ChatHeader';
import { ChatInput } from './chatPanel/ChatInput';
import { ChatMessage } from './chatPanel/ChatMessage';
import { useChat } from './chatPanel/useChat';

type ChatPanelProps = {
  title: string;
  onNew: () => void;
};

export const ChatPanel = ({ title, onNew }: ChatPanelProps) => {
  const { items } = useChat();
  const handleSubmit = (message: string) => {
    console.log(message);
  };

  return (
    <section className="w-full h-[100%] rounded-md border-[1px] border-gray-100 shadow-md shadow-gray-100">
      <ChatHeader title={title} onNew={onNew} />
      <section className="bg-gray-200 h-[82%]">
        {items?.map((item) => (
          <ChatMessage key={item.id} {...item} />
        ))}
      </section>
      <ChatInput onSubmit={handleSubmit} />
    </section>
  );
};
