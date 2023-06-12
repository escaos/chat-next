import { useState } from 'react';
import { BsSend } from 'react-icons/bs';

export const ChatPrompt = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <section className="rounded-md px-8 py-4 mb-4 w-full text-lg border-[1px] border-gray-100 shadow-md shadow-gray-100 bg-white">
      <h1 className="font-bold">Sistema</h1>
      <p className="text-gray-600 text-sm">
        Para obtener una respuesta adecuada a tus necesidades, escribe un prompt para el sistema
      </p>
      <div className="border-[2px] border-gray-400 rounded-md flex flex-row items-center justify-between px-4 py-2 mt-4 text-sm">
        <input
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          className=" appearance-none bg-transparent w-full focus:outline-none focus:border-none pr-4"
        />
        <button className="text-orange-500 text-md">
          <BsSend />
        </button>
      </div>
    </section>
  );
};
