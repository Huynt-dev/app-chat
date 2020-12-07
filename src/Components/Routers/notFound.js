import React from "react";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  let location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
      <div className="container mt-3">
        <h3>
          No Found <code>{location.pathname}</code>
        </h3>
      </div>

  );
}
