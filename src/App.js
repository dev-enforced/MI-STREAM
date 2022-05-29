import { AppRoutes } from "routes";
import { useSelector } from "react-redux";
import { UpperNavbar, Sidebar } from "components";
import styles from "./App.module.css";

function App() {
  const { themeProvided } = useSelector((storeReceived) => storeReceived.theme);
  const getClassName = (darkMode) => {
    if (darkMode) {
      return styles.dark;
    } else {
      return "";
    }
  };
  return (
    <div className={`${styles.App} ${getClassName(themeProvided)}`}>
      <UpperNavbar />
      <div className={`${styles.pageContent}`}>
        <Sidebar />
        <div className={`${styles.mainContent}`}>
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
