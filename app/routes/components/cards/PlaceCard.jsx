import { FaCopy } from "react-icons/fa";
import { FaArrowRightToCity } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { TbBooks } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";

const PlaceCard = ({
  city_name,
  city_name_ar,
  city_id,
  city_dis,
  no_originated_from_city,
  no_authored_from_city,
  no_copied_from_city,
  no_subject_copied,
  no_subject_authored,
}) => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const showTooltip = (id) => {
    setActiveTooltip(id);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  return (
    <Link
      to={`/City/${encodeURIComponent(city_name)}`}
      className="flex flex-col gap-1 p-8 border border-[#CCCCCC] rounded-lg"
      key={city_id}
    >
      <h2 className="text-xl font-bold">
        {city_name} ({city_name_ar})
      </h2>
      <p>{city_dis}</p>
      <div className="flex gap-x-4 flex-wrap gap-y-2">
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`originated-${city_id}`)}
          onMouseLeave={hideTooltip}
        >
          <FaArrowRightToCity />
          <span>{no_originated_from_city}</span>
          {activeTooltip === `originated-${city_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Persons Originated
            </div>
          )}
        </div>
        
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`authored-${city_id}`)}
          onMouseLeave={hideTooltip}
        >
          <MdWork />
          <span>{no_authored_from_city}</span>
          {activeTooltip === `authored-${city_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Works Authored
            </div>
          )}
        </div>
        
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`copied-${city_id}`)}
          onMouseLeave={hideTooltip}
        >
          <FaCopy />
          <span>{no_copied_from_city}</span>
          {activeTooltip === `copied-${city_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Works Copied
            </div>
          )}
        </div>
        
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`subject-authored-${city_id}`)}
          onMouseLeave={hideTooltip}
        >
          <SiBookstack />
          <span>{no_subject_authored}</span>
          {activeTooltip === `subject-authored-${city_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Subjects Authored
            </div>
          )}
        </div>
        
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`subject-copied-${city_id}`)}
          onMouseLeave={hideTooltip}
        >
          <TbBooks />
          <span>{no_subject_copied}</span>
          {activeTooltip === `subject-copied-${city_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Subjects Copied
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;