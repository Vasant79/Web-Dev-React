import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//react -routing
import Root from "./Components/Root";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Pages /Home";
import About from "./Components/Pages /About";
import ContactUs from "./Components/Pages /ContactUs";
import Github from "./Components/Pages /Github";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
