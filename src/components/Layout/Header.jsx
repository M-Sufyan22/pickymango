import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as HamburgerIcon } from "../../images/icons/hamburger.svg";
import logo from "../../images/logo.png";
import "./header.css";
import { useLanguage } from "../../hooks/useLanguage";
import Searchbar from "../utils/Searchbar";
import { Button, Collapse, IconButton, Typography } from "@material-ui/core";
import LanguageSwitch from "../utils/LanguageSwitch";
import usePopup from "../../hooks/usePopup";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import firebase from "../../config/firebase"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    minHeight: "180px",
    "&:hover":{
      boxShadow: "5px 5px 15px #00000053",
      transition: ".3s ease-in",

    },

  },
  table: {
    width: "max-content",

  },
  container: {
    width: "max-content",
  },
  media: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  media: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  },
}));


const Header = () => {
  const classes = useStyles();
  // const {
  //   login: [, setLoginOpen],
  //   signup: [, setSignupOpen],
  // } = usePopup();
  const [open, setOpen] = useState(false);
  const [testform, settestForm] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [formDetails, setformDetails] = useState({});
  useEffect(() => {
    if (window.innerWidth > 992) setOpen(true);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          setDashboard(true)
      } else {
        setDashboard(false)
      }
  })
  }, []);
  const handleLoginForm = () =>{
    testform ? settestForm(false): settestForm(true)
  }
  const { language } = useLanguage();
  const data = language.data.header.links;
  const loginTOacc = () => {
    if(formDetails.email && formDetails.password){
      firebase.auth().signInWithEmailAndPassword(formDetails.email, formDetails.password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        settestForm(false);
        setformDetails({})
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    }
  
  }
  return (
    <>
        <Dialog
        open={testform}        
        onClose={handleLoginForm}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleLoginForm}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Login to your account
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="UserupdateFormAdmin">
              <TextField
                required
                name="email"
                label="Email"
                fullWidth
                error={formDetails.email === ""}
                helperText={formDetails.email === "" ? 'Empty! please Enter ' : formDetails.email ? formDetails.email.length  <3 ? "Email is not valid": ' ':' '  }
                value={formDetails.email}
                onChange={(e) => setformDetails({
                  ...formDetails,email: e.target.value
                })} 
              />
              <TextField
                required
                name="password"
                label="Password"
                fullWidth
                error={formDetails.password === ""}
                helperText={formDetails.password === "" ? 'Empty! please Enter' :' ' }
                value={formDetails.password}
                onChange={(e) => setformDetails({
                  ...formDetails,
                  password: e.target.value
                })} 
              />
              
              
          <Button
            style={{ marginTop: "10px", marginLeft: "7px" }}
            variant="contained"
            color="secondary"
            onClick={loginTOacc}
          >
            Add
            &nbsp;
            <DoneAllIcon color="#fff" />
          </Button>
        </div>
      </Dialog>
    
      <header id="header" className="header" data-class="sticky-top">
        <div className="border-bottom mb-2">
          <div className="container">
            <div className="row">
              <div className="col-8">
                {dashboard ? 
                <>
                    <span className="border border-top-0 border-bottom-0 d-inline-block">
                  <Button
                    className="px-3 fw-light"
                    onClick={()=> firebase.auth().signOut()}
                  >
                    Logout
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
              
                </>
                :
                <>
                <span className="border border-top-0 border-bottom-0 d-inline-block">
                  <Button
                    component={Link}
                    className="px-3 fw-light"
                    onClick={handleLoginForm}
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
                </>  
                }
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
