import { toast } from "react-toastify";
const useAlerts = () => {
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
  const showAlerts = (typeOfAlert, message) => {
    toast[typeOfAlert](message, { ...settings });
  };
  return { showAlerts };
};
export { useAlerts };
