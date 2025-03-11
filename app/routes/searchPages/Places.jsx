import { Pagination, PlaceCard, SearchBar, SortSelect } from "../../index";
import { UseFilterContext } from "../../context/FilterContext";
import cityData from "../jsonFiles/places";
import { useGlobalContext } from "../../context/Context";
import { FaFilter } from "react-icons/fa";

const Places = () => {
  const {
    filteredPlaceData,
    currentPage,
    handlePageChange,
    sortOrder,
    handleSortChange,
  } = UseFilterContext();
  const { openFilterSidebar } = useGlobalContext();
  const totalRecords = cityData?.records?.length;
  const recordsPerPage = 10;

  return (
    <div>
      <SearchBar />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-0">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="sort" className="font-medium">
              Sort by
            </label>
            <SortSelect
              sortOrder={sortOrder}
              handleSortChange={handleSortChange}
            />
          </div>
          <button className="md:hidden" onClick={openFilterSidebar}>
            <FaFilter
              size={"24px"}
              className="font-bold text-4xl cursor-pointer"
            />
          </button>
        </div>
        <h1 className="mt-4 md:mt-0">
          Showing {filteredPlaceData?.length} results out of {totalRecords}
        </h1>
      </div>

      <section className="flex flex-col gap-4 mt-12">
        {filteredPlaceData?.length > 0 ? (
          filteredPlaceData.map((item) => (
            <PlaceCard key={item.city_id} {...item} />
          ))
        ) : (
          <h1>No Search Term match</h1>
        )}
      </section>
      {totalRecords > 10 && (
        <Pagination
          totalRecords={totalRecords}
          recordsPerPage={recordsPerPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Places;
