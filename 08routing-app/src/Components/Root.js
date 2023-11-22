import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// primary route /
function Root() {
  return (
    <div>
      <Header />
      {/* all children routes displayed here */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
