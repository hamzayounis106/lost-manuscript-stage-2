import { Outlet } from "react-router-dom";
import FilterSideBar from "../FilterSideBar";

const Card = () => {
    return (
        <div className='flex flex-col md:flex-row max-w-6xl mx-auto gap-4'>
            <FilterSideBar />
            <div className='md:w-3/4 w-full p-4 bg-white shadow-lg rounded-xl mb-4'>
                <Outlet />
            </div>
        </div>
    );
};

export default Card;
