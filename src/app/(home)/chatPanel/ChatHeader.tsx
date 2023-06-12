import { IoAddCircleOutline } from 'react-icons/io5';

type ChatHeaderProps = {
  title: string;
  onNew: () => void;
};

export const ChatHeader = ({ title, onNew }: ChatHeaderProps) => {
  return (
    <section className="flex flex-row justify-between items-center px-8 py-4 rounded-t-md h-[8%] bg-white">
      <h2 className="font-bold text-lg">{title}</h2>
      <button
        onClick={onNew}
        className="flex flex-row items-center gap-2 bg-orange-400 py-2 px-4 rounded-md text-white text-sm"
      >
        <IoAddCircleOutline className="text-lg" />
        Nueva Busqueda
      </button>
    </section>
  );
};
