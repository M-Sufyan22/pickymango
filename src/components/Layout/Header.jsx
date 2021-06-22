import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as HamburgerIcon } from "../../images/icons/hamburger.svg";
import logo from "../../images/logo.png";
import "./header.css";
import { useLanguage } from "../../hooks/useLanguage";
import Searchbar from "../utils/Searchbar";
import { Button, Collapse, IconButton } from "@material-ui/core";
import LanguageSwitch from "../utils/LanguageSwitch";
import usePopup from "../../hooks/usePopup";

const Header = () => {
  // const {
  //   login: [, setLoginOpen],
  //   signup: [, setSignupOpen],
  // } = usePopup();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 992) setOpen(true);
  }, []);
  const { language } = useLanguage();
  const data = language.data.header.links;
  return (
    <>
      <header id="header" className="header" data-class="sticky-top">
        <div className="border-bottom mb-2">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <span className="border border-top-0 border-bottom-0 d-inline-block">
                  <Button
                    component={Link}
                    className="px-3 fw-light"
                    // onClick={() => setLoginOpen(true)}
                  >
                    Login
                  </Button>
                </span>{" "}
                &nbsp;&nbsp; OR &nbsp;&nbsp;
                <span className="border border-top-0 border-bottom-0 d-inline-block">
                  <Button
                    component={Link}
                    className="px-3 fw-light"
                    // onClick={() => setSignupOpen(true)}
                  >
                    SignUp
                  </Button>
                </span>
                <span className="border border-top-0 border-bottom-0 d-inline-block">
                  <Button
                    component={Link}
                    className="px-3 fw-light"
                    to="/AdminDashboard"
                  >
                    Dashboard
                  </Button>
                </span>
              </div>
              <div className="col-4 pt-2 d-flex justify-content-end">
                <LanguageSwitch /> &nbsp;
                <span> {language.name} </span>
              </div>
            </div>
         
          </div>
        </div>
        <div className="border-bottom">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light header-wrapper">
              <Link className="navbar-brand header-logo mx-sm-3" to="/">
                <img
                  width={230}
                  alt="picky-mango"
                  className="d-inline-block align-top"
                  src={logo}
                />
              </Link>
              <IconButton
                className="navbar-toggler border-0 shadow-none header-burgerbtn"
                type="button"
                onClick={() => setOpen(!open)}
              >
                <HamburgerIcon fill="var(--color-primary)" width={30} />
              </IconButton>
              <div className="collapse navbar-collapse">
                <Searchbar />
              </div>
            </nav>
          </div>
        </div>
        <Collapse component="section" in={open} className="conatiner myc">
          <div className="row">
            <div className="col-12">
              <ul className="navbar-nav list-unstyled justify-content-center w-100 flex-lg-row mx-auto mt-2 mt-lg-0 header-menu">
                <li className="nav-item header-link">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link nav_link py-2 d-inline-block w-100 text-center"
                    to="/"
                  >
                    {data.home}
                  </NavLink>
                </li>
                <li className="nav-item header-link">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link nav_link py-2 d-inline-block w-100 text-center"
                    to="/view-ads-auctions"
                  >
                    {data.view_acutions}
                  </NavLink>
                </li>
                <li className="nav-item header-link">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link nav_link py-2 d-inline-block w-100 text-center"
                    to="/contact"
                  >
                    {data.contact_us}
                  </NavLink>
                </li>
                <li className="nav-item header-link">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link nav_link py-2 d-inline-block w-100 text-center"
                    to="/terms"
                  >
                    {data.terms}
                  </NavLink>
                </li>
                <li className="nav-item header-link">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link nav_link py-2 d-inline-block w-100 text-center"
                    to="/privacy"
                  >
                    {data.poilcy}
                  </NavLink>
                </li>
                <li className="nav-item header-link">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link nav_link py-2 d-inline-block w-100 text-center"
                    to="/faq"
                  >
                    FAQ
                  </NavLink>
                </li>
                <li className="nav-item text-center py-1 px-2 header-link">
                  <Button
                    className="fw-light"
                    component={Link}
                    variant="outlined"
                    to="/place-ads"
                  >
                    Place Ads
                  </Button>
                </li>
                <li className="nav-item  text-center py-1 px-2 header-link">
                  <Button
                    component={Link}
                    className="fw-light"
                    variant="outlined"
                    to="/place-auctions"
                  >
                    Place Auctions
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </Collapse>
      </header>
    </>
  );
};

export default Header;
