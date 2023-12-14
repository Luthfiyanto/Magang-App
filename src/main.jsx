import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";
import FilterContextProvider from "./context/FilterMitra.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterContextProvider>
      <App />
      <Analytics />
    </FilterContextProvider>
  </React.StrictMode>
);
