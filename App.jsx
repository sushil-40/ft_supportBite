import "./App.css";
import { ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
