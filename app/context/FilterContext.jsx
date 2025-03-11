import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { data } from "../routes/jsonFiles/people";
import cityData from "../routes/jsonFiles/places";
import { subjectsData } from "../routes/jsonFiles/subjects";
import { bookData } from "../routes/jsonFiles/manuscript";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("default");
    const recordsPerPage = 10;

    const sortData = (dataset, field) => {
        if (sortOrder === "atoz") {
            return [...dataset].sort((a, b) =>
                a[field].localeCompare(b[field])
            );
        } else if (sortOrder === "ztoa") {
            return [...dataset].sort((a, b) =>
                b[field].localeCompare(a[field])
            );
        }
        return dataset;
    };

    const filterAndPaginate = (dataset, searchField) => {
        const filtered = dataset.records.filter((item) =>
            item[searchField].toLowerCase().includes(searchTerm.toLowerCase())
        );

        const sorted = sortData(filtered, searchField);
        const startIndex = (currentPage - 1) * recordsPerPage;
        const endIndex = startIndex + recordsPerPage;
        return sorted.slice(startIndex, endIndex);
    };

    const filteredPeopleData = useMemo(
        () => filterAndPaginate(data, "person_name"),
        [searchTerm, currentPage, sortOrder]
    );

    const filteredPlaceData = useMemo(
        () => filterAndPaginate(cityData, "city_name"),
        [searchTerm, currentPage, sortOrder]
    );

    const filteredSubjectData = useMemo(
        () => filterAndPaginate(subjectsData, "subject"),
        [searchTerm, currentPage, sortOrder]
    );

    const ManuScript = useMemo(() => {
        return bookData.records.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, currentPage]);

    const handleSearchClick = () => {
        console.log("Search term:", searchTerm);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleSortChange = (order) => {
        setSortOrder(order);
    };

    return (
        <FilterContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                handleSearchClick,
                filteredPeopleData,
                filteredPlaceData,
                filteredSubjectData,
                ManuScript,
                currentPage,
                handlePageChange,
                sortOrder,
                handleSortChange,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;

export const UseFilterContext = () => {
    const context = useContext(FilterContext);

    if (!context) {
        throw new Error(
            "UseFilterContext must be used within a FilterProvider"
        );
    }

    return context;
};

FilterProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
