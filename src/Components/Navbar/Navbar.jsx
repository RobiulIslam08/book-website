import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mb-20 lg:mb-12">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="font-medium menu text-[#131313dc]  lg:text-lg text-base  flex bg-base-100 menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            <NavLink to="/" className={({ isActive }) =>
                      isActive
                        ? "underline text-[#22be0abf]"
                       
                        : ""
                    }>Home</NavLink>
            <NavLink to="listedBook/readBook" className={({ isActive }) =>
                      isActive
                        ? "underline text-[#22be0abf]"
                       
                        : ""
                    }>Listed Books</NavLink>
            <NavLink to="pagesRead" className={({ isActive }) =>
                      isActive
                        ? "underline text-[#22be0abf]"
                       
                        : ""
                    }>Pages to Read</NavLink>
                     <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline text-[#22be0abf]" : ""
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/review"
            className={({ isActive }) =>
              isActive ? "underline text-[#22be0abf]" : ""
            }
          >
            Review
          </NavLink>
          </ul>
        </div>
        <a className="lg:text-[28px] text-2xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex  ">
        <ul className="menu menu-horizontal text-[#131313dc]  text-base font-medium flex gap-5 px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline text-[#22be0abf]" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listedBook/readBook"
            className={({ isActive }) =>
              isActive ? "underline text-[#22be0abf]" : ""
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pagesRead"
            className={({ isActive }) =>
              isActive ? "underline text-[#22be0abf]" : ""
            }
          >
            Pages to Read
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline text-[#22be0abf]" : ""
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/review"
            className={({ isActive }) =>
              isActive ? "underline text-[#22be0abf]" : ""
            }
          >
            Review
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end  hidden md:inline-block   ">
        <div className="flex justify-end gap-4">
          <a className="btn bg-[#23BE0A] hover:bg-[#22be0ad9] text-white">
            Sign in
          </a>
          <a className="btn bg-[#59C6D2] hover:bg-[#59c6d2d1] text-white">
            Sing up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
