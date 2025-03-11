import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const ButtonLinks = ({ links }) => {
    const location = useLocation();

    return (
        <div className='flex items-center gap-2 md:gap-5'>
            {links?.map((item, index) => {
                // Check if the link is a hash link (#id) or a full route (/page, /page#id)
                const isHashLink =
                    item.to.startsWith("#") || item.to.includes("#");

                const commonClasses = `slide px-2 sm:px-4 py-2 text-base sm:text-xl rounded-sm cursor-pointer border border-[#CCCCCC] flex-1 text-center`;
                const activeClasses =
                    "bg-[#5D9EFF] text-white shadow shadow-blue";
                const inactiveClasses = "bg-white text-black";

                return isHashLink ? (
                    // HashLink for scrolling (same page or different page)
                    <HashLink
                        key={item.id}
                        smooth
                        to={item.to}
                        className={`${commonClasses} ${inactiveClasses}`}
                    >
                        <span>{item.text}</span>
                    </HashLink>
                ) : (
                    // NavLink for regular navigation
                    <NavLink
                        key={item.id}
                        to={item.to}
                        className={({ isActive }) =>
                            `${commonClasses} ${
                                isActive ||
                                (index === 0 &&
                                    location.pathname === "/catalogue")
                                    ? activeClasses
                                    : inactiveClasses
                            }`
                        }
                    >
                        <span>{item.text}</span>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default ButtonLinks;
