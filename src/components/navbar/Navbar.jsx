import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { RiShoppingBag3Fill, RiShoppingCart2Line } from "react-icons/ri";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FaRegCircleXmark } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { getToken } from "../../services/token";
import Logo from "../logo/Logo";

function Navbar({
  userModal,
  setUserModal,
  userToken,
  setUserToken,
  filterData,
  likeData,
  cartData,
}) {
  const navigate = useNavigate();

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
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <ul className="links">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/signup"}>Sign Up</NavLink>
              </li>
            </ul>
            <div className="icons">
              <div className="search">
                <input
                  id="lusearch"
                  onFocus={() => {
                    navigate("/searchs");
                  }}
                  onInput={(e) => {
                    filterData(e.target.value);
                  }}
                  type="text"
                  placeholder="What are you looking for?"
                />
                <label htmlFor="lusearch">
                  <LuSearch />
                </label>
              </div>
              <Link to={"/like"}>
                <FaRegHeart />
                {getToken()
                  ? likeData?.length > 0 && <span>{likeData?.length}</span>
                  : ""}
              </Link>
              <Link to={"/cart"}>
                <RiShoppingCart2Line />
             
                {getToken()
                  ? cartData?.cart_items?.length > 0 && <span>{cartData?.cart_items?.length}</span>
                  : ""}
              </Link>
              {userToken ? (
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
              ) : (
                ""
              )}
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
          <li
            onClick={() => {
              setUserToken(null);
              localStorage.clear();
              setUserModal(false);
              navigate("/");
            }}
          >
            <TbLogout2 /> Logout
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
