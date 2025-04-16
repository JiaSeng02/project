import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./static/css/reset.css";
import "./static/css/font/iconfont.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
