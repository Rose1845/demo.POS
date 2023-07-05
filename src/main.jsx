import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/layout/index.jsx";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router/index.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
      <Layout>
        <App />
      </Layout>
    {/* </RouterProvider> */}
  </React.StrictMode>
);
