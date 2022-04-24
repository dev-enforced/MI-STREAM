import styles from "./App.module.css";
import { AppRoutes } from "routes";
import { UpperNavbar, Sidebar } from "components";

function App() {
  return (
    <div className={`${styles.App} `}>
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
