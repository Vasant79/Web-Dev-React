import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* all child routes rendered here */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
