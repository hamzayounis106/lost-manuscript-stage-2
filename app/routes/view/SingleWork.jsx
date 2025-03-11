import { useState, useRef, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import cityData from "../jsonFiles/places";
import { useParams } from "react-router-dom";
import { MdZoomIn, MdZoomOut } from "react-icons/md";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { UseFilterContext } from "../../context/FilterContext";

function SingleWork() {
  const { workName } = useParams();
  const decodedPlaceName = decodeURIComponent(workName);
  const place = cityData.records.find(
    (record) => record.city_name === decodedPlaceName
  );

  const mockPdfUrl = "http://www.africau.edu/images/default/sample.pdf";

  if (!place) {
    return <div className="text-center py-2 text-xl">Work not found</div>;
  }

  const { city_name } = place;
  const image_url = "/dummy/rect.png";

  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  //find menusvript
  const { ManuScript } = UseFilterContext();
  const findedMenuscript = ManuScript.find((it) => {
    if (city_name && ManuScript) {
      return it?.city?.city_name === city_name;
    }
  });

  return (
    <main className="max-w-[1440px] mx-auto lg:px-8 px-4 py-8">
      <Breadcrumbs />

      <section className="flex md:flex-row flex-col gap-8">
        <div
          ref={imageContainerRef}
          className="relative md:w-[60%] w-full bg-white border border-[#CCCCCC] rounded-lg p-3 self-start overflow-hidden"
        >
          <div className="relative w-full">
            {image_url && (
              <img
                src={image_url}
                alt={city_name}
                className={`w-full shadow-lg object-cover transition-transform duration-300
                  ${isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"}
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

        <div className="flex flex-col flex-1">
          <div className="p-8 rounded bg-white flex-1">
            <h2 className="text-2xl font-semibold">{city_name}</h2>

            <h3 className="font-medium mt-10">Population</h3>
            <p className="text-[14.5px]">100,000,000</p>

            <h3 className="font-medium mt-10">Era Founded</h3>
            <p className="text-[14.5px]">1037 CE</p>

            <h3 className="font-medium mt-10">Area</h3>
            <p className="text-[14.5px]">342,987,34 sq ft</p>

            <h3 className="font-medium mt-10">About</h3>
            <p className="text-[14.5px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex justify-between gap-x-6 mt-4">
            <button
              className="flex items-center justify-center gap-2 w-1/2 bg-[#111827] rounded px-4 py-2 text-white cursor-pointer"
              onClick={() => window.open(mockPdfUrl, "_blank")}
            >
              <FaDownload /> Download
            </button>
            <button
              onClick={() => alert("Share button clicked!")}
              className="flex items-center justify-center gap-2 w-1/2 border border-[#CCCCCC] rounded cursor-pointer"
            >
              <IoMdShare /> Share
            </button>
          </div>
        </div>
      </section>

      {/* contribution */}
      {findedMenuscript?.author_name && (
        <section>
          <div className="flex flex-col flex-1">
            <h2 className="font-semibold mt-8 ">Contribution</h2>

            <div className="p-8 mt-4 rounded bg-white flex-1 border border-[#CCCCCC]">
              <div>
                <h3 className="font-medium ">Authors</h3>
                <ul className="pl-12 list-disc">
                  {findedMenuscript?.person_roles.map((dt, idx) => (
                    <li key={idx} className="text-[14.5px]">
                      {dt.person_name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium mt-10">Date of contribution</h3>
                <ul className="pl-12 list-disc">
                  <li className="text-[14.5px]">
                    {findedMenuscript.author_date}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mt-10">City of contribution</h3>
                <ul className="pl-12 list-disc">
                  <li className="text-[14.5px]">{city_name}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Map Section */}
      <section>
        <h2 className="font-semibold mt-8 mb-5">Area</h2>
        <iframe
          className="border border-[#CCCCCC] rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.265401994139!2d44.47070000000001!3d33.30060000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1557829c0c7d9fa3%3A0x7abbeddc1de9bb4c!2sBaghdad%20Al%20Jadeeda!5e0!3m2!1sen!2siq!4v1681040387398!5m2!1sen!2siq"
          width="100%"
          height="400px"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Baghdad Al Jadeeda Map"
        />
      </section>
    </main>
  );
}

export default SingleWork;
