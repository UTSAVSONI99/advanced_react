import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Movie } from "./Pages/Movie";
import { Contact, contactData } from "./Pages/Contact";
import AppLayout from "./components/Layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import { getMoviesData } from "./api/ApiData";
import MoviesDetails from "./components/UI/MoviesDetails";
import { getMoviesDetails } from "./api/GetMoviesDetail";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MoviesDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/movie" element={<Movie />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Route>
  //   )
  // );

  return <RouterProvider router={router} />;
};

export default App;
