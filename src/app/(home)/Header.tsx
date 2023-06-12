import { BiSidebar } from 'react-icons/bi';
import { MdSettings } from 'react-icons/md';

type HeaderProps = {
  toggleSide: () => void;
};

export const Header = ({ toggleSide }: HeaderProps) => {
  return (
    <header className="bg-orange-500 flex flex-row items-center justify-between py-4 px-8 text-white h-12">
      <section className="flex flex-row items-center gap-4">
        <button className="border-white border-2 px-2 rounded-md h-8">{'< Atrás'}</button>
        <button onClick={toggleSide} className="border-white border-2 p-1 rounded-md h-8">
          <BiSidebar className="text-xl" />
        </button>
      </section>
      <button onClick={toggleSide} className="border-white border-2 p-1 rounded-md h-8">
        <MdSettings className="text-xl" />
      </button>
    </header>
  );
};
