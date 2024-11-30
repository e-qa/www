import { IoGrid } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className=" flex justify-center gap-20 p-1 rounded-2xl border  border-t w-[320px] border-slate-800 h-10 backdrop-blur-sm bg-black/50">
      <div className="flex  gap-10">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `cursor-pointer gap-3 text-sm font-bold flex items-center ${
              isActive ? 'active' : ''
            }`
          }
        >
          <FaHome size={18} />
          Home
        </NavLink>
        <NavLink
          to={'/about'}
          className={({ isActive }) =>
            `cursor-pointer text-sm font-bold gap-3 flex items-center ${
              isActive ? 'active' : ''
            }`
          }
        >
          <FaUserCircle size={18} />
          About
        </NavLink>
        <NavLink
          to={'/work'}
          className={({ isActive }) =>
            `cursor-pointer text-sm font-bold gap-3 flex items-center ${
              isActive ? 'active' : ''
            }`
          }
        >
          <IoGrid size={18} />
          Work
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
