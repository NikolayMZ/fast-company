import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./components/users";

import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(<Users />);

reportWebVitals();
