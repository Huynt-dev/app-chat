// import React, { useState, useEffect } from "react";
// import { Col, Row, Input, Tooltip } from "antd";
// import { socket, socketListener } from "../../configs/socket";
// import {
//   Contents,
//   Wrapper,
//   Wrapper2,
//   Chat,
//   Time,
//   Text,
//   Box,
//   InputChat,
//   Col1,
// } from "./style";

// const user = JSON.parse(localStorage.getItem("user"));
// const { Search } = Input;
// const HomePage = () => {
//   const [chat, setChat] = useState("");
//   const [dataUser, setDataUser] = useState([]);
//   const time = <span>10:10</span>;

//   useEffect(() => {
//     socketListener();
//     socket.on("NEW-MESSAGE", (chat) => {
//       setDataUser((pre) => [...pre, chat]);
//     });
//   }, []);

//   const messageSend = (e) => {
//     e.preventDefault();
//     socket.emit("NEW-MESSAGE", chat);
//     setChat("");
//   };

//   // console.log("render", socket);

//   return <p>asdsad</p>;
// };

// export default HomePage;
