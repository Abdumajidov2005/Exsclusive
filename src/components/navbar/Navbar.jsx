  import { FaRegHeart, FaRegUser } from "react-icons/fa";
  import { LuSearch } from "react-icons/lu";
  import { RiShoppingBag3Fill, RiShoppingCart2Line } from "react-icons/ri";
  import "./Navbar.css";
  import { Link, NavLink } from "react-router-dom";
  import { FiUser } from "react-icons/fi";
  import { FaRegCircleXmark } from "react-icons/fa6";
  import { IoIosStarOutline } from "react-icons/io";
  import { TbLogout2 } from "react-icons/tb";

  function Navbar({userModal, setUserModal}) {

    return (
      <>
        <nav>
          <div className="nav-top">
            <div className="container">
              <div></div>
              <div className="summer">
                <p>
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%! <span>ShopNow</span>
                </p>
              </div>
              <select name="" id="">
                <option value="">English</option>
                <option value="">Russian</option>
              </select>
            </div>
          </div>
          <div className="nav-bottom">
            <div className="container">
              <div className="logo">
                <Link to="/">Exclusive</Link>
              </div>
              <ul className="links">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"contact"}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to={"about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"servise"}>Sign Up</NavLink>
                </li>
              </ul>
              <div className="icons">
                <div className="search">
                  <input type="text" placeholder="What are you looking for?" />
                  <h5>
                    <LuSearch />
                  </h5>
                </div>
                <Link to={"/like"}>
                  <FaRegHeart />
                </Link>
                <p>
                  <RiShoppingCart2Line />
                </p>
                <p
                  className="users"
                  onClick={() => {
                    if (userModal == true) {
                      setUserModal(false);
                    } else {
                      setUserModal(true);
                    }
                  }}
                >
                  <FiUser />
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div
          onClick={(e) => {
            e.preventDefault();
          }}
          className={`user-modal ${userModal == true ? "active" : ""}`}
        >
          <ul>
            <li>
              <Link
                onClick={() => {
                  setUserModal(false);
                }}
                to={"/account"}
              >
                <FaRegUser /> Manage My Account
              </Link>
            </li>
            <li>
              <RiShoppingBag3Fill />
              My Order
            </li>
            <li>
              <FaRegCircleXmark /> My Cancellations
            </li>
            <li>
              <IoIosStarOutline /> My Reviews
            </li>
            <li>
              <TbLogout2 /> Logout
            </li>
          </ul>
        </div>
      </>
    );
  }

  export default Navbar;
