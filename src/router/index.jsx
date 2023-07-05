import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Benefits from "../components/Benefits";
// import Access from "../components/Access";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
//   {
//     path: "/benefits",
//     element:<Benefits />,
//   },
//   {
//     path: "/shop",
//     element: <div>Shop</div>,
//   },
//   {
//     path: "/access",
//     element: <Access />,
//   }
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);