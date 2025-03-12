import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { FaHome, FaPenNib } from "react-icons/fa";
import { MdFolderCopy } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";
import { useState } from "react";

const PersonCard = ({
  book_title,
  person_id,
  person_name,
  person_name_ar,
  author_details,
  origin,
  date,
  no_work_authored,
  no_work_copied,
  no_subjects_contributed,
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
      to={`/catalogue/${encodeURIComponent(book_title)}`}
      className="flex flex-col gap-1 p-4 border border-[#CCCCCC] rounded-lg"
      key={person_id}
    >
      <h2 className="text-xl font-bold">
        {person_name} ({person_name_ar})
      </h2>
      <p>{author_details}</p>
      <div className="flex gap-x-4 flex-wrap gap-y-2">
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`origin-${person_id}`)}
          onMouseLeave={hideTooltip}
        >
          <FaHome />
          <span>{origin}</span>
          {activeTooltip === `origin-${person_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Origin
            </div>
          )}
        </div>
        
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`date-${person_id}`)}
          onMouseLeave={hideTooltip}
        >
          <SlCalender />
          <span>{date}</span>
          {activeTooltip === `date-${person_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Date
            </div>
          )}
        </div>

        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`authored-${person_id}`)}
          onMouseLeave={hideTooltip}
        >
          <FaPenNib />
          <span>{no_work_authored}</span>
          {activeTooltip === `authored-${person_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Works Authored
            </div>
          )}
        </div>
        
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`copied-${person_id}`)}
          onMouseLeave={hideTooltip}
        >
          <MdFolderCopy />
          <span>{no_work_copied}</span>
          {activeTooltip === `copied-${person_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Works Copied
            </div>
          )}
        </div>
        
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`subjects-${person_id}`)}
          onMouseLeave={hideTooltip}
        >
          <GiArchiveResearch />
          <span>{no_subjects_contributed}</span>
          {activeTooltip === `subjects-${person_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Subjects Contributed
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PersonCard;