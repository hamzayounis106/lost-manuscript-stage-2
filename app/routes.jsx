import {
  Hero,
  MainLayout,
  Peoples,
  Catalogue,
  Places,
  Subject,
  Date,
  MenuScript,
  SingleBook,
  Visualizer,
  AboutUs,
} from ".";

import SingleSubject from "./routes/view/SingleSubject";
import SinglePlace from "./routes/view/SinglePlace";
import Period from "./routes/searchPages/Period";
import SingleWork from "./routes/view/SingleWork";
import Login from "./routes/view/Login";

const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <MenuScript />
          </>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/catalogue",
        element: <Catalogue />,
        children: [
          {
            index: true,

            element: <Peoples />,
          },
          {
            path: "people",
            element: <Peoples />,
          },

          {
            path: "cities",
            element: <Places />,
          },
          {
            path: "subject",
            element: <Subject />,
          },
          {
            path: "work",
            element: <Date />,
          },
          {
            path: "period",
            element: <Period />,
          },
        ],
      },
      {
        path: "/catalogue/:bookTitle", // Dynamic route for SingleBook
        element: <SingleBook />,
      },
      {
        path: "/City/:placeName", // Dynamic route for SingleBook
        element: <SinglePlace />,
      },
      {
        path: "/Subjects/:subjectName", // Dynamic route for SingleBook
        element: <SingleSubject />,
      },
      {
        path: "/work/:workName", // Dynamic route for Singlework
        element: <SingleWork />,
      },
      {
        path: "/visualizer",
        element: <Visualizer />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
];

export default routes;
