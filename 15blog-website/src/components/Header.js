import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

function Header() {
  //make navItem -- header links
  const navigate = useNavigate();

  const navItem = [
    {
      name: "Home",
      slug: "/home",
      isActive: true,
    },
    {
      name: "Login",
      slug: "/login",
      isActive: true,
    },
    {
      name: "Sign Up",
      slug: "/signup",
      isActive: true,
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

  return (
    <div className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt=" Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Blog Website
          </span>
        </Link>

        <span>Logo</span>
        <ul className="flex ">{renderNav}</ul>
      </div>
    </div>
  );
}

export default Header;
