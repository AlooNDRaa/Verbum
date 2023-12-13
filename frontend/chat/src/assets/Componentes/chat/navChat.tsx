import { BiMessageRoundedDetail } from 'react-icons/bi';
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

interface NavProps {
  onTogglePerson: () => void;
}

function Nav({ onTogglePerson }: NavProps) {
  return (
    <main className="text-white border-r border-stone-700 w-[4rem] bg-[#101015]">
      <div className="m-3">
        <Link
          to="/home"
          className="text-3xl text-[#B80E65] hover:text-[#f472b6] active:text-[#f472b6] focus:outline-none focus:text-[#f472b6]"
        >
          <IoHomeOutline />
        </Link>
      </div>
      <div className="m-3 pt-[15px] ">
        <button
          onClick={onTogglePerson}
          className="text-[#B80E65] text-3xl hover:text-[#f472b6] active:text-[#f472b6] focus:outline-none  focus:text-[#f472b6]"
        >
          <BiMessageRoundedDetail />
        </button>
      </div>
      <div className="flex">
        <a className="m-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVcXrm9fqNaAC8VTQIrGsfGsfQacAHWUHSQ&usqp=CAU"
            alt="img"
            className="w-10 h-10  rounded-full absolute bottom-6"
          />
        </a>
      </div>
    </main>
  );
}

export default Nav;
