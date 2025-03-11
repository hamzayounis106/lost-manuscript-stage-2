// Breadcrumbs.js
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Split the current path into an array for breadcrumb generation
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="mb-4 max-w-[1440px] mx-auto">
      {paths.length > 0 ? (
        <div className="">
          <Link to="/">Home</Link>

          {paths.map((path, index) => {
            let to = "/" + paths.slice(0, index + 1).join("/");
            to == "/City"
              ? (to = "/catalogue/cities")
              : to == "/Subjects"
              ? (to = "/catalogue/subject")
              : "";

            const isCurrentScreen = index === paths.length - 1;

            // Decode the URL-encoded path segment
            const decodedPath = decodeURIComponent(path);

            return (
              <span key={index}>
                {" > "}
                <Link
                  to={to}
                  className={isCurrentScreen ? "font-extrabold text-black" : ""}
                >
                  {decodedPath.charAt(0).toUpperCase() + decodedPath.slice(1)}
                </Link>
              </span>
            );
          })}
        </div>
      ) : (
        "Home"
      )}
    </div>
  );
};

export default Breadcrumbs;
