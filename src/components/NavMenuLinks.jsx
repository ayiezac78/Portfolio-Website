import {useLayoutEffect} from 'react'
import {FiUser, FiHome, FiFolder, FiEdit3, FiMail, FiBriefcase} from 'react-icons/fi'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavMenuLinks = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/');
  }

  useLayoutEffect(()=>{
    window.scrollTo(0,0)
  },[navigate])

  return (
    <div className="flex justify-center md:justify-end text-[#324B4C] dark:text-white font-medium menu menu-horizontal rounded-box bg-transparent flex-col md:flex-row navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={location.pathname === "/about" ? "/" : "/about"}>
                <div className="flex items-center mr-1 group">
                  <div className="flex items-center p-1">
                    {location.pathname === "/about" ? (
                      <FiHome className=" text-white group-active:font-bold inline-block mr- md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                    ) : (
                      <FiUser className="text-[#324B4C] dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                    )}
                    <span
                      className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                        location.pathname === "/about" ? "text-white" : ""
                      } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50`}
                    >
                      {location.pathname === "/about" ? "Home" : "About"}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
            <Link to={location.pathname === "/portfolio" ? "/" : "/portfolio"}>
              <div className="flex items-center mr-1 group">
                <div className="flex items-center  p-1">
                  {location.pathname === "/#portfolio" ? (
                    <FiHome className="text-white group-active:font-bold dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  ) : (
                    <FiFolder className="text-[#324B4C] dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  )}
                  <span
                    className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                      location.pathname === "/portfolio" ? "text-white" : ""
                    } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50`}
                  >
                    {location.pathname === "/portfolio" ? "Home" : "Portfolio"}
                  </span>
                </div>
              </div>
            </Link>
            </li>
            <li>
            <Link to={location.pathname === "/experience" ? "/" : "/experience"}>
              <div className="flex items-center mr-1 group">
                <div className="flex items-center  p-1">
                  {location.pathname === "/experience" ? (
                    <FiHome className="text-white group-active:font-bold dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  ) : (
                    <FiBriefcase className="text-[#324B4C] dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  )}
                  <span
                    className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                      location.pathname === "/experience" ? "text-white" : ""
                    } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50`}
                  >
                    {location.pathname === "/experience" ? "Home" : "Experience"}
                  </span>
                </div>
              </div>
            </Link>
            </li>
            <li>
              <div className="flex items-center mr-1">
                <FiEdit3 className="text-[#324B4C] dark:text-white inline-block mr-2" />
                <span className="inline-block py-2 md:py-0 sm:hidden md:block">
                  Blog
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center mr-1">
                <FiMail className="text-[#324B4C] dark:text-white inline-block mr-2" />
                <span className="inline-block py-2 md:py-0 sm:hidden md:block">
                  Contact
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={location.pathname === "/about" ? "/" : "/about"}>
              <div className="flex items-center mr-1 group">
                <div className="flex items-center p-1">
                  {location.pathname === "/about" ? (
                    <FiHome className=" text-white group-active:font-bold inline-block mr- md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  ) : (
                    <FiUser className="text-[#324B4C] dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  )}
                  <span
                    className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                      location.pathname === "/about" ? "text-white" : ""
                    } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50`}
                  >
                    {location.pathname === "/about" ? "Home" : "About"}
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={location.pathname === "/portfolio" ? "/" : "/portfolio"}>
              <div className="flex items-center mr-1 group">
                <div className="flex items-center  p-1">
                  {location.pathname === "/portfolio" ? (
                    <FiHome className="text-white group-active:font-bold dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  ) : (
                    <FiFolder className="text-[#324B4C] dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  )}
                  <span
                    className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                      location.pathname === "/portfolio" ? "text-white" : ""
                    } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50`}
                  >
                    {location.pathname === "/portfolio" ? "Home" : "Portfolio"}
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={location.pathname === "/experience" ? "/" : "/experience"}>
              <div className="flex items-center mr-1 group">
                <div className="flex items-center  p-1">
                  {location.pathname === "/experience" ? (
                    <FiHome className="text-white group-active:font-bold dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  ) : (
                    <FiBriefcase className="text-[#324B4C] dark:text-white inline-block mr-1 md:m-1 group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50" />
                  )}
                  <span
                    className={`inline-block py-2 md:py-0 sm:hidden md:block ${
                      location.pathname === "/experience" ? "text-white" : ""
                    } group-hover:text-white group-hover:transition group-hover:duration-200 group-hover:ease-linear dark:group-hover:opacity-50`}
                  >
                    {location.pathname === "/experience" ? "Home" : "Experience"}
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="flex items-center mr-1">
              <FiEdit3 className="text-[#324B4C] dark:text-white inline-block mr-2" />
              <span className="inline-block py-2 md:py-0 sm:hidden md:block">
                Blog
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center mr-1">
              <FiMail className="text-[#324B4C] dark:text-white inline-block mr-2" />
              <span className="inline-block py-2 md:py-0 sm:hidden md:block">
                Contact
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavMenuLinks
