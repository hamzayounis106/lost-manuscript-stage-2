import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { FaHome, FaPenNib } from "react-icons/fa";
import { MdFolderCopy } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";

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
      <div className="flex gap-x-4">
        <div className="flex items-center gap-x-4">
          <FaHome />
          <span>{origin}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <SlCalender />
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-x-4">
          <FaPenNib />
          <span>{no_work_authored}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <MdFolderCopy />
          <span>{no_work_copied}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <GiArchiveResearch />
          <span>{no_subjects_contributed}</span>
        </div>
      </div>
    </Link>
  );
};

export default PersonCard;
