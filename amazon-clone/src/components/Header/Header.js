import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";
import classes from "./Header.module.css";
import SecondHeader from "./SecondHeader";

import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);

  return (
    <section className={classes.fixed}>
      <section className={classes.outer_wrapper}>
        <div className={classes.logo_section}>
          <Link to="/">
            <img
              className={classes.logo_image}
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </Link>
        </div>
        <div className={classes.delivery_section}>
          <Link to="/">
            {" "}
            <span>
              <p className={classes.delivery_p}>Delivery to</p>
              <SlLocationPin aria-label="Location Pin Icon" />
              USA
            </span>
          </Link>
        </div>

        <div className={classes.All_Section_OuterWrapper}>
          <div className={classes.all_section}>
            <select name="" id="">
              <option value="ALL">ALL</option>
            </select>
          </div>
          {/* Search bar */}
          <div className={classes.searchbar_wrapper}>
            <input
              type="text"
              placeholder="Search Amazon"
              className={classes.search_input}
            />
          </div>
          <div className={classes.Search_Icon}>
            {" "}
            <AiOutlineSearch aria-label="Search Icon" size={32} />
          </div>
        </div>

        <div className={classes.flag_and_En_wrapper}>
          <div className={classes.flag}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt="USA flag"
              />
            </Link>
            <div className={classes.En_wrapper}>
              {" "}
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </div>
          </div>
        </div>

        <div className={classes.account_wrapper}>
          <div className={classes.account_link}>
            <Link to={!user && "/auth"}>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => (user ? auth.signOut() : null)}>
                    Sign Out
                  </span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </Link>
          </div>

          <div className={classes.return_wrapper}>
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
          </div>

          <div className={classes.cart_wrapper}>
            <Link to="/cart">
              <div className={classes.ziro}>
                {" "}
                <span>{totalItem}</span>
              </div>

              <div className={classes.cart_icon}>
                <BiCart size={35} aria-label="Cart Icon" />
              </div>

              <div className={classes.cart_p}>
                <p>Cart</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <SecondHeader />
    </section>
  );
}

export default Header;
