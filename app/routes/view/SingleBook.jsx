// SingleBook.js
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../jsonFiles/people"; // Import your data
import { Breadcrumbs, SharePopup } from "../../index";
import { MdZoomIn, MdZoomOut } from "react-icons/md";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import Tabs from "../components/Tabs/Tabs";
import Overview from "../components/Tabs/singlePage/Overview";
import Objects from "../components/Tabs/singlePage/Objects";
import Contents from "../components/Tabs/singlePage/Contents";
import FullDescription from "../components/Tabs/singlePage/FullDescription";

const SingleBook = () => {
  const { bookTitle } = useParams();
  const decodedBookTitle = decodeURIComponent(bookTitle);
  const book = data.records.find(
    (record) => record.book_title === decodedBookTitle
  );

  // State to control the visibility of the SharePopup
  const [showSharePopup, setShowSharePopup] = useState(false);

  if (!book) {
    return <div>Book not found</div>;
  }

  const {
    person_name,
    person_name_ar,
    image_url,
    description,
    author_details,
    book_title,
    date,
    origin,
  } = book;

  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [tab, setTab] = useState(0);

  const imageContainerRef = useRef(null);

  const handleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  const handleFullScreen = () => {
    if (!isFullscreen) {
      if (imageContainerRef.current) {
        if (imageContainerRef.current.requestFullscreen) {
          imageContainerRef.current.requestFullscreen();
        } else if (imageContainerRef.current.webkitRequestFullscreen) {
          imageContainerRef.current.webkitRequestFullscreen();
        } else if (imageContainerRef.current.msRequestFullscreen) {
          imageContainerRef.current.msRequestFullscreen();
        }
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const tabs = [
    {
      label: "Overview",
      content: <Overview book={book} />,
    },
    { label: "Object", content: <Objects /> },
    { label: "Contents", content: <Contents /> },
    { label: "Full Description", content: <FullDescription /> },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs />

      <section className="flex flex-col lg:flex-row gap-8 mt-6">
        {/* Image Section */}
        <div
          ref={imageContainerRef}
          className="relative w-full bg-white border border-[#CCCCCC] rounded-lg p-3 self-start overflow-hidden"
        >
          <div className="relative w-full">
            {image_url && (
              <img
                src={image_url}
                className={`w-full shadow-lg object-cover transition-transform duration-300
                                  ${
                                    isZoomed
                                      ? "scale-150 cursor-zoom-out"
                                      : "cursor-zoom-in"
                                  }
                                `}
              />
            )}

            <div
              className={`absolute right-2 flex gap-2 z-20 ${
                isZoomed ? "bottom-20" : "bottom-2"
              }`}
            >
              <button
                className="p-1 bg-white rounded-sm shadow-sm cursor-pointer flex items-center justify-center"
                onClick={handleZoom}
                aria-label="Toggle Zoom"
              >
                {isZoomed ? <MdZoomOut size={18} /> : <MdZoomIn size={18} />}
              </button>

              <button
                className="p-1 bg-white rounded-sm shadow-sm cursor-pointer flex items-center justify-center"
                onClick={handleFullScreen}
                aria-label="Toggle Fullscreen"
              >
                {isFullscreen ? (
                  <AiOutlineFullscreenExit size={18} />
                ) : (
                  <AiOutlineFullscreen size={18} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="lg:min-w-[480px] w-full h-max lg:max-w-[480px] ">
          <Tabs tabs={tabs} />

          <div className="flex justify-between gap-x-6 mt-4 ">
            <button
              className="flex items-center justify-center gap-2 w-1/2 bg-[#111827] rounded px-4 py-2 text-white cursor-pointer"
              onClick={() => window.open(book.pdf_url, "_blank")}
            >
              <FaDownload /> Download
            </button>
            <button
              onClick={() => setShowSharePopup(true)}
              className="flex items-center justify-center gap-2 w-1/2 border border-[#CCCCCC] rounded cursor-pointer"
            >
              <IoMdShare /> Share
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white  p-6 my-12 rounded-lg border border-[#CCCCCC]">
        <div className=" flex flex-col  justify-center">
          <p className="font-semibold text-xl mb-2">Descriptions:</p>
          <p>{description}</p>
        </div>
      </section>

      <section className="bg-white  p-6 my-12 rounded-lg border border-[#CCCCCC]">
        <div className=" flex flex-col  justify-center">
          <p className="font-semibold text-xl mb-2">About Author:</p>
          <p>
            <span className="font-semibold">Author Name : </span> {person_name}{" "}
            ({person_name_ar}){" "}
          </p>
          <p>{author_details}</p>
        </div>
      </section>

      <section className="bg-white  p-6 my-12 rounded-lg border border-[#CCCCCC]">
        <div className=" flex flex-col  justify-center">
          <p className="font-semibold text-xl mb-2">Contribution</p>
          <p></p>

          <p>
            <span className="font-semibold">Author : </span> {person_name}
          </p>
          <p>
            <span className="font-semibold">Work Title : </span> {book_title}
          </p>
          <p>
            <span className="font-semibold">Date of Contribution : </span>
            {date}
            {}
          </p>
          <p>
            <span className="font-semibold">City of Contribution : </span>{" "}
            {origin}
          </p>
        </div>
      </section>

      {/* Render the SharePopup if showSharePopup is true */}
      {showSharePopup && (
        <SharePopup book={book} onClose={() => setShowSharePopup(false)} />
      )}
    </section>
  );
};

export default SingleBook;
