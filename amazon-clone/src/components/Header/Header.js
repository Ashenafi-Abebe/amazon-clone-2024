import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";
import classes from "./Header.module.css";
import SecondHeader from "./SecondHeader";
import { BsSearch } from "react-icons/bs";

import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <section className={classes.outer_wrapper}>
        <div className={classes.logo_section}>
          <Link to="/">
            <img
              className={`${classes.logo_image} span`}
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </Link>
        </div>
        <div className={classes.delivery_section}>
          <Link to="/">
            {" "}
            <span>
              <p className={`${classes.delivery_p} span`}>Delivery to</p>
              <SlLocationPin aria-label="Location Pin Icon" />
              USA
            </span>
          </Link>
        </div>

        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <BsSearch size={38} />
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
                  <span
                    className="span"
                    onClick={() => (user ? auth.signOut() : null)}
                  >
                    Sign Out
                  </span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span className="span">Account & Lists</span>
                </>
              )}
            </Link>
          </div>

          <div className={classes.return_wrapper}>
            <Link to="/orders">
              <p>Returns</p>
              <span className="span">& Orders</span>
            </Link>
          </div>

          <div className={classes.cart_wrapper}>
            <Link to="/cart">
              <div className={classes.ziro}>
                {" "}
                <span className="span">{totalItem}</span>
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
