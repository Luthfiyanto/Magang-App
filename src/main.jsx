import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FilterContextProvider from "./context/FilterMitra.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </React.StrictMode>
);
