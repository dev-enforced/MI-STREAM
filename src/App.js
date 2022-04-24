import { AppRoutes } from "routes";
import { useTheme } from "context";
import { UpperNavbar, Sidebar } from "components";
import styles from "./App.module.css";

function App() {
  const { darkMode } = useTheme();
  const getClassName = (darkMode) => {
    if (darkMode) {
      return styles.dark;
    } else {
      return "";
    }
  };
  return (
    <div className={`${styles.App} ${getClassName(darkMode)}`}>
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
