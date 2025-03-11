import { GrClose } from "react-icons/gr";
import { useGlobalContext } from "../../../context/Context";
import MultiSelector from "./components/MultiSelect";
import DateRange from "./components/DateRange";

const WorkFilter = () => {
  const filterOptions = [
    {
      title: "Subjects",
      options: [
        "Religious Text",
        "Scientific Text",
        "Literary Work",
        "Historical Documents",
      ],
    },
    {
      title: "City of Authorship",
      options: ["Makkah", "Madina", "Kufa", "Basra", "Egypt"],
    },
    {
      title: "City of Author",
      options: ["Makkah", "Madina", "Kufa", "Basra", "Egypt"],
    },
    {
      title: "Authored by",
      options: ["Hazrat Ali", "Amir Hamza", "Abu Zaa'ar"],
    },
  ];

  const { isFilterSidebarOpen, closeFilterSidebar, resetFilters } =
    useGlobalContext();
  return (
    <div
      className={`${
        isFilterSidebarOpen ? "translate-x-0" : "-translate-x-[200%]"
      } fixed top-0 left-0 md:static h-full w-[300px] p-4 text-black bg-white transition-transform duration-300 z-50 shadow-lg rounded-xl`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold ">Advanced Filters</h2>

        <GrClose
          onClick={closeFilterSidebar}
          className="md:hidden cursor-pointer"
        />
      </div>

      {/* Filters */}
      {filterOptions.map((filterOption, i) => (
        <MultiSelector
          key={i}
          title={filterOption.title}
          options={filterOption.options}
        />
      ))}

      <DateRange title="Authorship date (Hijri)" />
      <DateRange title="Acquisition Date (Hijri)" />

      {/* Clear Filter */}
      <button
        onClick={resetFilters}
        className="slide slide-white border-2 border-black w-full py-2 bg-[#111827] text-white rounded-md cursor-pointer mt-6"
      >
        <span>Clear Filters</span>
      </button>
    </div>
  );
};

export default WorkFilter;
