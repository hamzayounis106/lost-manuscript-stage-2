import { useLocation } from "react-router-dom";
import WorkFilter from "./filters/WorkFilter";
import SubjectFilter from "./filters/SubjectFilter";
import CitiesFilter from "./filters/CitiesFilter";
import PeriodFilter from "./filters/PeriodFilter";
import PeopleFilter from "./filters/PeopleFilter";

const FilterSideBar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return <WorkFilter />;
  }
  if (location.pathname === "/catalogue/people") {
    return <PeopleFilter />;
  }
  if (location.pathname === "/catalogue/cities") {
    return <CitiesFilter />;
  }
  if (location.pathname === "/catalogue/subject") {
    return <SubjectFilter />;
  }
  if (location.pathname === "/catalogue/period") {
    return <PeriodFilter />;
  }
};

export default FilterSideBar;
