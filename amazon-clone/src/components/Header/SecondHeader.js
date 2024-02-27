import React from "react";
import { Link } from "react-router-dom";
import classes from "./SecondHeader.module.css";
import { FiMenu } from "react-icons/fi";
import "./SecondHeader.module.css";

function SecondHeader() {
  return (
    <section className={classes.Lower_Outer_Wrapper}>
      <div className={classes.menu_Wrapper}>
        <div className={classes.menu_Section}>
          <Link to="/" className={classes.menu_Icon}>
            <FiMenu size={25} />
          </Link>
        </div>
        <div className={classes.lower_All_Wrapper}>
          <Link to="/">
            <p>All</p>
          </Link>
        </div>
      </div>
      <div className={classes.Valentine_Wrapper}>
        <Link to="/">
          <p>Valentine's Gifts</p>
        </Link>
      </div>
      <div className={classes.Medical_Wrapper}>
        <Link to="/" className={classes.medical_Paragraph}>
          <select name="" id="">
            <option value="">Medial Care</option>
          </select>
        </Link>
      </div>

      <div className={classes.Groceries_Wrapper}>
        <Link to="/" className={classes.groceries_Inner_Wrapper}>
          <select name="" id="">
            <option value="">Groceries</option>
          </select>
        </Link>
      </div>

      <div className={classes.Bestseller_Wrapper}>
        <Link to="/">
          <p>Best Sellers</p>
        </Link>
      </div>
      <div className={classes.amazonBasics_Wrapper}>
        <Link to="/">
          <p>Amazon Basics</p>
        </Link>
      </div>

      <div className={classes.prime_Wrapper}>
        <Link to="/">
          <select name="" id="">
            <option value="">
              <p>Prime</p>
            </option>
          </select>
        </Link>
      </div>

      <div className={classes.newReleases_Wrapper}>
        <Link to="/">
          <p>New Releases</p>
        </Link>
      </div>

      <div className={classes.todaysDeals_Wrapper}>
        <Link to="/">
          <p>Today's Deals</p>
        </Link>
      </div>

      <div className={classes.customerService_Wrapper}>
        <Link to="/">
          <p>Customer Service</p>
        </Link>
      </div>

      <div className={classes.music_Wrapper}>
        <Link to="/">
          <p>Music</p>
        </Link>
      </div>

      <div className={classes.registry_Wrapper}>
        <Link to="/">
          <p>Registry</p>
        </Link>
      </div>

      <div className={classes.books_Wrapper}>
        <Link to="/">
          <p>Books</p>
        </Link>
      </div>
    </section>
  );
}

export default SecondHeader;
