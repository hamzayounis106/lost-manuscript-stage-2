import { FaPeopleArrows, FaRegAddressBook } from "react-icons/fa";
import { FaPerson, FaScroll } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SubjectCard = ({
  subject,
  subject_ar,
  subject_id,
  no_work_authored_under_subject,
  no_work_copied_under_subject,
  no_persons_authored_under_subject,
  no_persons_copied_under_subject,
}) => {
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
        <div className="flex items-center gap-x-4">
          <FaRegAddressBook />
          <span>{no_work_authored_under_subject}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <FaScroll />
          <span>{no_work_copied_under_subject}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <FaPerson />
          <span>{no_persons_authored_under_subject}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <FaPeopleArrows />
          <span>{no_persons_copied_under_subject}</span>
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
