import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Alerts = () => {
  const settings = {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    pauseOnHover: true,
    rtl: false,
    newestOnTop: true,
    draggable: true,
    theme: "dark",
  };
  return <ToastContainer {...settings} />;
};
export { Alerts };
