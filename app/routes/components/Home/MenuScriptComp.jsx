import { SlCalender } from "react-icons/sl";
import { UseFilterContext } from "../../../context/FilterContext";
import { FaCity, FaCopy, FaFilter, FaHome } from "react-icons/fa";
import { useGlobalContext } from "../../../context/Context";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const MenuScriptComp = () => {
  const { ManuScript } = UseFilterContext();
  const { openFilterSidebar } = useGlobalContext();

  return (
    <section>
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold">Manuscripts</h1>
        <button className="md:hidden" onClick={openFilterSidebar}>
          <FaFilter
            size={"24px"}
            className="font-bold text-4xl cursor-pointer"
          />
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
                <div className="flex items-center gap-x-4">
                  <FiUser /> <span>{item.author_name}</span>
                </div>
                <div className="flex items-center gap-x-4">
                  <FaCity /> <span>{item.city.city_name}</span>
                </div>
                <div className="flex items-center gap-x-4">
                  <FaHome /> <span>{item.city.city_name}</span>
                </div>
                <div className="flex items-center gap-x-4">
                  <SlCalender />
                  <span>965 CE</span>
                </div>
                <div className="flex items-center gap-x-4">
                  <FaCopy /> <span>{item.copying_date}</span>
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
