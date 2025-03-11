import { IoClose } from 'react-icons/io5';

import { Link, NavLink } from 'react-router-dom';

import { linksData } from '../main/Navbar';
import { useGlobalContext } from '../../context/Context';
import { IoMdSettings } from 'react-icons/io';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed top-0 left-0 w-max h-full text-black bg-white transition-transform duration-300 z-100 font-display`}
    >
      <div className='flex items-center justify-between p-4 space-x-4 border-b border-gray-700'>
        <Link to={'/'} className='text-xl font-bold'>
          Lost Manuscripts of Mosul
        </Link>
        <button onClick={closeSidebar}>
          <IoClose className='text-2xl cursor-pointer' />
        </button>
      </div>
      <nav className='mt-4'>
        <ul className='space-y-4'>
          {linksData.map(({ id, link, to }) => (
            <li key={id}>
              <NavLink
                to={link === 'Catalogue' ? to : '#'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#0077FF] text-lg font-bold transition-colors duration-200 cursor-pointer p-4'
                    : 'text-black text-lg hover:text-gray-700 transition-colors duration-200 cursor-pointer p-4'
                }
                onClick={(e) => {
                  if (link !== 'Catalogue') {
                    e.preventDefault();
                  }
                }}
                style={
                  link !== 'Catalogue'
                    ? { color: '#000', fontWeight: '400' }
                    : {}
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className='mt-8 px-4'>
        <div className='items-center space-x-6  flex'>
          <button className='slide slide-white border-black border-2 bg-black text-white px-4 py-2 rounded-sm cursor-pointer'>
            <span>Sign In</span>
          </button>
          {/* <button className='cursor-pointer'>
            <IoMdSettings size={'40px'} />
          </button> */}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
