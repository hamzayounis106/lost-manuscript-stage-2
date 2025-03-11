import { IoMenuSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";

export const linksData = [
    { id: 1, link: "About Us", to: "/about-us" },
    { id: 2, link: "Catalogue", to: "/catalogue" },
    //{ id: 3, link: 'Map', to: '#' },
    { id: 4, link: "Visualizer", to: "/visualizer" },
];

const Navbar = () => {
    const { openSidebar } = useGlobalContext();

    return (
        <nav className='bg-[#FFFFFF] h-20 font-display'>
            <div className='max-w-6xl mx-auto flex items-center justify-between px-4 h-full'>
                {/* Logo */}
                <div className='text-black text-2xl font-bold'>
                    <NavLink to='/'>
                        Lost Manuscripts{" "}
                        <span className='hidden sm:inline'>of Mosul</span>
                    </NavLink>
                </div>

                {/* Navigation Links */}
                <ul className='hidden lg:flex gap-12'>
                    {linksData.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[#0077FF] text-lg font-bold transition-colors duration-200 cursor-pointer"
                                        : "text-black text-lg hover:text-gray-700 transition-colors duration-200 cursor-pointer"
                                }
                            >
                                {item.link}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className='items-center space-x-6 hidden lg:flex'>
                    <button className='slide slide-white border-black border-2 bg-black text-white px-4 py-2 rounded-sm cursor-pointer'>
                        <span>Sign In</span>
                    </button>
                    {/* <button className='cursor-pointer'>
            <IoMdSettings size='40px' />
          </button> */}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={openSidebar}
                    className='lg:hidden text-black text-3xl cursor-pointer'
                >
                    <IoMenuSharp />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
