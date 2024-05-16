import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/LOGO.jpeg";
import { Search } from "./Search";
import { DropdownLoggedOut } from "./Elements/DropdownLoggedOut";
import { useCart } from "../context";
// import { DropdownLoggedIn } from "./Elements/DropdownLoggenIn";

export const Header = () => {
  const { cartList } = useCart();
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [searchSection, setSearchSection] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const toggleDropdown = () => {
    setDropdown(prevDropdown => !prevDropdown);
  };
  

  return (
    <header>
      <nav className={`bg-blue ${darkMode ? "dark:bg-gray-900" : ""}`}>
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="Logo" />
            <span className={`self-center text-2xl font-semibold whitespace-nowrap ${darkMode ? "dark:text-white" : "text-black"}`}>Stock Explorer</span>
          </Link>
          <div className="flex items-center relative">
          <a href="http://localhost:8501" className={`text-${darkMode ? "white" : "black"} ${darkMode ? "dark:text-white" : "dark:text-black"} mr-5`}>Stock Market Dashboard</a>


            <span onClick={toggleDarkMode} className="cursor-pointer text-xl text-gray-700 dark:text-black mr-5 bi bi-gear-wide-connected"></span>
            <span onClick={() => setSearchSection(!searchSection)} className={`cursor-pointer text-xl ${darkMode ? "text-gray-700" : "text-black"} mr-5 bi bi-search`}></span>
            <Link to="/cart" className={`text-${darkMode ? "gray-700 dark:text-white" : "black"} mr-5`}>
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">{cartList.length}</span>
              </span>
            </Link>
            <span onClick={() => setDropdown(!dropdown)} className={`bi bi-person-circle cursor-pointer text-2xl ${darkMode ? "text-gray-700 dark:text-white" : "text-black"}`}></span>
            {dropdown && <DropdownLoggedOut />}
          </div>
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection} />}
    </header>
  );
};
