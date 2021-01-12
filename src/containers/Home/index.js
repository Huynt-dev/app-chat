import React from "react";
import { Input } from "antd";

const user = JSON.parse(localStorage.getItem("user"));

const HomePage = ({ loginActionA, loginA }) => {
  console.log(loginA);
  return (
    <div>
      <button
        onClick={(e) => {
          loginActionA();
        }}
      >
        click on
      </button>

      <h2>values: {loginA.values}</h2>
    </div>
  );
};

export default HomePage;
