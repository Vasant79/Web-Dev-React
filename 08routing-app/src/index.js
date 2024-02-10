import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//react -routing
import Root from "./Components/Root";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/pages /Home";
import About from "./Components/pages /About";
import ContactUs from "./Components/pages /ContactUs";
import Github from "./Components/pages /Github";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";

//  way 1 --> takes array of obj -- having one root route and its child
let route = createBrowserRouter([
  {
    //this is root node
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/github",
        element: <Github />,
      },
    ],
  },
]);

// way 2 --> takes create Routes from children -- one root and other children
// let route = createBrowserRouter(
//   createRoutesFromChildren(
//     //root route
//     <Route path="/" element={<Root />}>
//       {/* children routes */}
//       {/* <Route path="billing" element={}></Route> */}
//     </Route>
//   )
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
    {/* <App /> */}
  </React.StrictMode>
);

/**
 * Note -- link is a kind of a tag for moving to new location
 * Navlink is a special link that know if is Active or pending or transation state
 */
reportWebVitals();
