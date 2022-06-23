import { AppRoutes } from "routes";
import { useSelector } from "react-redux";
import {
  UpperNavbar,
  Sidebar,
  Alerts,
  ScrollToTop,
  PlaylistsModal,
} from "components";
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
      <ScrollToTop>
        <UpperNavbar />
        <div className={`${styles.pageContent}`}>
          <Sidebar />
          <div className={`${styles.mainContent}`}>
            <AppRoutes />
          </div>
        </div>
        <PlaylistsModal />
        <Alerts />
      </ScrollToTop>
    </div>
  );
}

export default App;
