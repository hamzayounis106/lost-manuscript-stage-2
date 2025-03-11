import { FaSearch } from "react-icons/fa";
import ClickAnimeBtn from "../ClickAnimeBtn";

function SearchIcon({ handleSearchClick }) {
  return (
    <ClickAnimeBtn
      tabIndex={2}
      TagName="button"
      onClick={handleSearchClick}
      className="slide slide-white border-black border-2 bg-black text-white px-[23px] py-[11px] rounded-sm cursor-pointer"
    >
      <FaSearch size="24px" />
    </ClickAnimeBtn>
  );
}

export default SearchIcon;
