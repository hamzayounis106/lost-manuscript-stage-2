import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(
    window.innerWidth > 768 // Open by default if height is greater than 'md' breakpoint
  );
  // States for filters
  const [categories, setCategories] = useState([]);
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [authorShipDateRange, setAuthorShipDateRange] = useState({
    from: "",
    to: "",
  });
  const [AcquisitionDateRange, setAcquisitionDateRange] = useState({
    from: "",
    to: "",
  });
  const [region, setRegion] = useState("");
  const [author, setAuthor] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [cityOfAuthorShip, setCityOfAuthorShip] = useState([]);
  const [cityOfAuthor, setCityOfAuthor] = useState([]);
  const [cityOfAuthoredBy, setcityOfAuthoredBy] = useState([]);
  // Methods to handle filter updates
  const handleCategoryChange = (category) => {
    setCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category]
    );
  };
  const handleSubjectsChange = (subjects) => {
    setSubjects((prevCategories) =>
      prevCategories.includes(subjects)
        ? prevCategories.filter((item) => item !== subjects)
        : [...prevCategories, subjects]
    );
  };
  const handleCityOfAuthorShipChange = (data) => {
    setCityOfAuthorShip((prevCategories) =>
      prevCategories.includes(data)
        ? prevCategories.filter((item) => item !== data)
        : [...prevCategories, data]
    );
  };
  const handleCityOfAuthorChange = (data) => {
    setCityOfAuthor((prevCategories) =>
      prevCategories.includes(data)
        ? prevCategories.filter((item) => item !== data)
        : [...prevCategories, data]
    );
  };
  const handleAuthoredByChange = (data) => {
    setcityOfAuthoredBy((prevCategories) =>
      prevCategories.includes(data)
        ? prevCategories.filter((item) => item !== data)
        : [...prevCategories, data]
    );
  };

  const handleDateRangeChange = (from, to) => {
    setDateRange({ from, to });
  };
  const handleAuthorShipDateRangeChange = (from, to) => {
    setAuthorShipDateRange({ from, to });
  };
  const handleAcquisitionDateRangeChange = (from, to) => {
    setAcquisitionDateRange({ from, to });
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const resetFilters = () => {
    setCategories([]);
    setDateRange({ from: "", to: "" });
    setRegion("");
    setAuthor("");
    subjects([]);
    cityOfAuthorShip([]);
    cityOfAuthor([]);
    cityOfAuthoredBy([]);
    setAuthorShipDateRange({ from: "", to: "" });
    setAcquisitionDateRange({ from: "", to: "" });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsFilterSidebarOpen(window.innerWidth > 768);
    };

    // Set initial state and attach listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openFilterSidebar = () => setIsFilterSidebarOpen(true);
  const closeFilterSidebar = () => setIsFilterSidebarOpen(false);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openFilterSidebar,
        closeFilterSidebar,
        isFilterSidebarOpen,
        categories,
        dateRange,
        region,
        author,
        handleCategoryChange,
        handleDateRangeChange,
        handleRegionChange,
        handleAuthorChange,
        resetFilters,
        handleSubjectsChange,
        subjects,
        handleCityOfAuthorShipChange,
        cityOfAuthorShip,
        handleCityOfAuthorChange,
        cityOfAuthor,
        handleAuthoredByChange,
        cityOfAuthoredBy,
        handleAuthorShipDateRangeChange,
        authorShipDateRange,
        AcquisitionDateRange,
        setAcquisitionDateRange,
        handleAcquisitionDateRangeChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
