import React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
}
