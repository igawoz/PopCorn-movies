import React from "react";
import ReactDOM from "react-dom/client";

// import StarRating from "./StarRating";
import { useState } from "react";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating maxRating={10} size="36" color="violet" className="test" /> */}
    {/* <UserRating /> */}
  </React.StrictMode>
);
