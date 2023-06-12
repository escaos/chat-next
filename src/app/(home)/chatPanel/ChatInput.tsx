import { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import { VscWand } from 'react-icons/vsc';

type ChatInputProps = {
  onSubmit: (message: string) => void;
};

export const ChatInput = ({ onSubmit }: ChatInputProps) => {
  const [prompt, setPrompt] = useState('');
  return (
    <section className="w-full rounded-b-md flex flex-row justify-center items-center h-[10%] bg-white">
      <div className="border-[2px] border-gray-400 rounded-md flex flex-row items-center justify-between px-4 py-2 text-sm w-11/12">
        <input
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          className=" appearance-none bg-transparent w-full focus:outline-none focus:border-none pr-4"
        />
        <button
          className="text-orange-500 text-lg flex flex-row gap-2"
          onClick={() => {
            onSubmit(prompt);
          }}
        >
          <BsSend />
          <VscWand className="text-sky-500 " />
        </button>
      </div>
    </section>
  );
};
