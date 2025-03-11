import { FaCopy } from "react-icons/fa";
import { FaArrowRightToCity } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { TbBooks } from "react-icons/tb";
import { Link } from "react-router-dom";

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
        <div className="flex items-center gap-x-4">
          <FaArrowRightToCity />
          <span>{no_originated_from_city}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <MdWork />
          <span>{no_authored_from_city}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <FaCopy />
          <span>{no_copied_from_city}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <SiBookstack />
          <span>{no_subject_authored}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <TbBooks />
          <span>{no_subject_copied}</span>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
