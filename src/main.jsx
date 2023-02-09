import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ResponsiveContainer } from "recharts";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProSidebarProvider>
        <ResponsiveContainer>
          <App />
        </ResponsiveContainer>
      </ProSidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
