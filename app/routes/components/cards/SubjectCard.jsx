import { FaPeopleArrows, FaRegAddressBook } from "react-icons/fa";
import { FaPerson, FaScroll } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const SubjectCard = ({
  subject,
  subject_ar,
  subject_id,
  no_work_authored_under_subject,
  no_work_copied_under_subject,
  no_persons_authored_under_subject,
  no_persons_copied_under_subject,
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
      to={`/Subjects/${encodeURIComponent(subject)}`}
      className="flex flex-col gap-1 p-4 border border-[#CCCCCC] rounded-lg py-12"
      key={subject_id}
    >
      <h2 className="text-xl font-bold">
        {subject} ({subject_ar})
      </h2>

      <div className="flex gap-x-4 flex-wrap gap-y-2">
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`authored-works-${subject_id}`)}
          onMouseLeave={hideTooltip}
        >
          <FaRegAddressBook />
          <span>{no_work_authored_under_subject}</span>
          {activeTooltip === `authored-works-${subject_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Works Authored
            </div>
          )}
        </div>
        
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`copied-works-${subject_id}`)}
          onMouseLeave={hideTooltip}
        >
          <FaScroll />
          <span>{no_work_copied_under_subject}</span>
          {activeTooltip === `copied-works-${subject_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Works Copied
            </div>
          )}
        </div>
        
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`authored-persons-${subject_id}`)}
          onMouseLeave={hideTooltip}
        >
          <FaPerson />
          <span>{no_persons_authored_under_subject}</span>
          {activeTooltip === `authored-persons-${subject_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Persons Authored
            </div>
          )}
        </div>
        
        <div 
          className="flex items-center gap-x-4 relative cursor-default"
          onMouseEnter={() => showTooltip(`copied-persons-${subject_id}`)}
          onMouseLeave={hideTooltip}
        >
          <FaPeopleArrows />
          <span>{no_persons_copied_under_subject}</span>
          {activeTooltip === `copied-persons-${subject_id}` && (
            <div className="absolute -top-8 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              Persons Copied
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;