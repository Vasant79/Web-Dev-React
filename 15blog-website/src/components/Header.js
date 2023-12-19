import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

//getting status from store
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "./slice/authSlice";

function Header() {
  //make navItem -- header links
  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navItem = [
    {
      name: "Home",
      slug: "/home",
      isActive: authStatus, //display when auth staus true,
    },
    {
      name: "Login",
      slug: "/login",
      isActive: !authStatus,
    },
    {
      name: "Sign Up",
      slug: "/signup",
      isActive: !authStatus,
    },
  ];

  const renderNav = navItem.map((item) => {
    return item.isActive ? (
      <li key={item.name}>
        <Button
          className="mx-2 rounded"
          onClick={() => {
            navigate(item.slug);
          }}
        >
          {item.name}
        </Button>
      </li>
    ) : null;
  });

  function handleLogout() {
    dispatch(logout()); // had problem did just logout
    navigate("/login");
  }
  //console.log(authStatus);

  return (
    <div className="bg-white border-gray-200 dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/letter-b-logo-design-template-167fa2497769af88f0cbd5d35c7dd2f8_screen.jpg?ts=1639748416"
            className="h-10  rounded hover:border-4 hover:border-black"
            alt=" Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Blog Website
          </span>
        </Link>

        <ul className="flex ">
          {renderNav}
          {authStatus && (
            <li>
              <Button onClick={handleLogout}>Logout</Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
