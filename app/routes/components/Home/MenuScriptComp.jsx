import { SlCalender } from "react-icons/sl";
import { UseFilterContext } from "../../../context/FilterContext";
import { FaCity, FaCopy, FaFilter, FaHome } from "react-icons/fa";
import { useGlobalContext } from "../../../context/Context";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const MenuScriptComp = () => {
  const { ManuScript } = UseFilterContext();
  const { openFilterSidebar } = useGlobalContext();
  const [activeTooltip, setActiveTooltip] = useState(null);

  const showTooltip = (id) => {
    setActiveTooltip(id);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  return (
    <section>
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold">Manuscripts</h1>
        <button 
          className="md:hidden relative" 
          onClick={openFilterSidebar}
          onMouseEnter={() => showTooltip("filter")}
          onMouseLeave={hideTooltip}
        >
          <FaFilter
            size={"24px"}
            className="font-bold text-4xl cursor-pointer"
          />
          {activeTooltip === "filter" && (
            <div className="absolute -bottom-10 right-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Open filters
            </div>
          )}
        </button>
      </div>
      {/* map data  */}
      <section className="flex flex-col gap-4 mt-12">
        {ManuScript?.length > 0 ? (
          ManuScript.map((item) => (
            <Link
              to={`/work/${item.city.city_name}`}
              className="flex flex-col gap-1 p-4 border border-[#CCCCCC]   rounded-lg"
              key={item?.author_date}
            >
              <h2 className="text-xl font-bold">
                {item?.title} ({item?.title_ar})
              </h2>
              <p>
                A Persian polymath renowned for his contributions to medicine,
                philosophy, and science.
              </p>
              <div className="flex gap-x-4 flex-wrap gap-y-2">
                <div 
                  className="flex items-center gap-x-4 relative cursor-default"
                  onMouseEnter={() => showTooltip(`author-${item.author_date}`)}
                  onMouseLeave={hideTooltip}
                >
                  <FiUser /> 
                  <span>{item.author_name}</span>
                  {activeTooltip === `author-${item.author_date}` && (
                    <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                      Author
                    </div>
                  )}
                </div>
                <div 
                  className="flex items-center gap-x-4 relative cursor-default"
                  onMouseEnter={() => showTooltip(`city-${item.author_date}`)}
                  onMouseLeave={hideTooltip}
                >
                  <FaCity /> 
                  <span>{item.city.city_name}</span>
                  {activeTooltip === `city-${item.author_date}` && (
                    <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                      City
                    </div>
                  )}
                </div>
                <div 
                  className="flex items-center gap-x-4 relative cursor-default"
                  onMouseEnter={() => showTooltip(`location-${item.author_date}`)}
                  onMouseLeave={hideTooltip}
                >
                  <FaHome /> 
                  <span>{item.city.city_name}</span>
                  {activeTooltip === `location-${item.author_date}` && (
                    <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                      Location
                    </div>
                  )}
                </div>
                <div 
                  className="flex items-center gap-x-4 relative cursor-default"
                  onMouseEnter={() => showTooltip(`date-${item.author_date}`)}
                  onMouseLeave={hideTooltip}
                >
                  <SlCalender />
                  <span>965 CE</span>
                  {activeTooltip === `date-${item.author_date}` && (
                    <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                      Date
                    </div>
                  )}
                </div>
                <div 
                  className="flex items-center gap-x-4 relative cursor-default"
                  onMouseEnter={() => showTooltip(`copy-${item.author_date}`)}
                  onMouseLeave={hideTooltip}
                >
                  <FaCopy /> 
                  <span>{item.copying_date}</span>
                  {activeTooltip === `copy-${item.author_date}` && (
                    <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                      Copying Date
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h1>No Search Term match</h1>
        )}
      </section>
    </section>
  );
};
export default MenuScriptComp;