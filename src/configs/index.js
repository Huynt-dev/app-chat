import dotenv from "dotenv";
dotenv.config();

const configs = {
  REACT_APP_URL: process.env.REACT_APP_URL,
  IMAGE_URL: process.env.REACT_APP_IMAGE_URL,
  social:{
    facebook: "fb.com/huynt.info",
    phone: "0986699123"
  }
};



export default configs;
