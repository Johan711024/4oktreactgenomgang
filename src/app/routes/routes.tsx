import { Link, createBrowserRouter } from "react-router-dom"
import RootLayout from "../../pages/root/Root"
import ErrorPage from "../../pages/root/ErrorPage"
import StartPage from "../../pages/root/Startpage"
import AboutPage from "../../pages/root/Aboutpage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    handle: {
      crumb: () => <Link to="/">Startsida</Link>
    },
    children: [
      { index: true, element: <StartPage /> },
      {
        path: "om2",
        element: <AboutPage />,

        handle: {
          crumb: () => <Link to="om">Om Rörlighet i staten</Link>
        }
      },
      {
        path: "nyheter",

        handle: {
          crumb: () => <Link to="nyheter">Nyheter</Link>
        },
        children: [
          {
            // index: true,
            // element: <News />
          },
          {
            // path: "utvecklas-i-din-yrkesroll-genom-vaara-professionella-naetverk",
            // element: <NewsProNetworking />,
            // handle: {
            //   crumb: () => (
            //     <Link to="nyheter/utvecklas-i-din-yrkesroll-genom-vaara-professionella-naetverk">
            //       Utvecklas i din yrkesroll genom våra professionella nätverk
            //     </Link>
            //   )
            // }
          }
        ]
      }
    ]
  }
])
