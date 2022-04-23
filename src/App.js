import styles from "./App.module.css";
import { AppRoutes } from "routes";
import { UpperNavbar } from "components";

function App() {
  return (
    <div className={`${styles.App}`}>
      <UpperNavbar />
      <AppRoutes />
    </div>
  );
}

export default App;
