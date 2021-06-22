import React, { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import { connect } from "react-redux";
import clsx from "clsx";
import logo from "../../images/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import DashboardLinks from "./Links/DashboardLinks";
import "../../styles/dashboard.css";
import { Button } from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons"
import CategoriesManage from "./categories/categoriesManage";
import ManageAds from "./ads";

// import UsersManage from "../components/AdminDashboard/users/UsersManage";
// import AllUsersSignMethod from "../components/AdminDashboard/home/AllUsersSignMethod";
// import FormModel from "../components/loginForm/FormModel";
// import ContactQueries from "../components/AdminDashboard/queries/ContactQueries";
// import ManageOrders from "../components/AdminDashboard/orders/manageOrders";
// import Queries from "../components/AdminDashboard/queries/Queries";
// import EmailSubs from "../components/AdminDashboard/queries/EmailSubs";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" className="mt-auto">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Picky Mango
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    backgroundColor: "#fff"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.primary.main
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  logo: {
    maxWidth: 160,
    margin: "0 auto",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#000",
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#000 ",
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh !important",
    overflowX: "hidden",
    overflowY: "scroll",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    
    minHeight: "90vh",
    display: "flex",flexDirection: "column",
    alignItems: "center", justifyContent: "space-between"
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

function AdminPanel(props) {
  const [value, setValue] = useState(0);
  const [users, setUsers] = useState(true);
  const [products, setproducts] = useState(true);
  const[loading, setLoading] = useState(true);
  
  useEffect(() => {
   checkLoading();
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function checkLoading(){
    if(Object.keys(props.currentuser).length !== 0){
      setLoading(false);
    }else{
      setLoading(true)
    }
    setTimeout(()=> {
      setLoading(false);
    },3000)
  }


  var user = firebase.auth().currentUser;

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const signOut = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      props.history.push('/');
      alert("Signout successfully")
    }).catch((error) => {
      alert("Signout Failed!")
    });
  }
  return (
    <div>

      {/* {Object.keys(props.currentuser).length !== 0 ? ( */}
        {/* props.currentuser.admin ? ( */}
          <>
            <div className={classes.root}>

              <AppBar
           position="fixed"
                className={clsx(classes.appBar, open && classes.appBarShift)}
              >
                <Toolbar className={classes.toolbar}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(
                      classes.menuButton,
                      open && classes.menuButtonHidden
                    )}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                  >
                    Admin Dashboard
                  </Typography>
                  <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={()=> console.log("logout")}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
                  <Button color="inherit">
                    <Button onClick={signOut} component={Link} variant="button" color="inherit">
                      
                      <ExitToAppOutlinedIcon style={{ marginLeft: "5px" }} />
                    </Button>

                  </Button>
                </Toolbar>
              </AppBar>
              <Drawer

                variant="permanent"
                classes={{
                  paper: clsx(
                    classes.drawerPaper,
                    !open && classes.drawerPaperClose
                  ),
                }}
                
                open={open}
              >
                <div className={classes.toolbarIcon}>
                  <img src={logo} alt="picky Mango" className={classes.logo} />

                  <ChevronLeftIcon
                    style={{ textDecoration: "none", color: "#000", cursor: "pointer"}}
                    onClick={handleDrawerClose}
                  />

                </div>
                <Divider />

                <DashboardLinks
                  ckopn={open}
                  value={value}
                  handleChange={handleChange}
                />

                <Divider />
              </Drawer>


              <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container  maxWidth="lg" className={classes.container} >
                  <Grid container spacing={3} >
                    <TabPanel value={value} index={0} Dashboard={true} />
                    <TabPanel  value={value} index={1} categories={true} />
                    <TabPanel value={value} index={2} users={true} />
                    <TabPanel value={value} index={3} orders={true} />
                    <TabPanel value={value} index={4} contact={true} />
                    <TabPanel value={value} index={5} quries={true} />
                    <TabPanel value={value} index={6} emailSubs={true} />
                  </Grid>
                  <Box pt={4}>
                    <Copyright />
                  </Box>
                </Container>
              </main>
            </div>


          </>
        {/* ) : (
          <> */}
            {/* <div className="notForadmin">
              <div id="clouds">
                <div className="cloud x1"></div>
                <div className="cloud x1_5"></div>
                <div className="cloud x2"></div>
                <div className="cloud x3"></div>
                <div className="cloud x4"></div>
                <div className="cloud x5"></div>
              </div>
              <div className='c'>
                <div className='_404'>505</div>
                <hr className="myhr" />
                <div className='_1'>THE PAGE</div>
                <div className='_2'>Is Only For Admin</div>
                <br />
                <Button variant="contained" color="secondary" onClick={() => props.history.push('/Home')}>Go Back</Button>

              </div>
            </div> */}
          {/* </>
        )
      ) : (
        <> */}
          {/* {
            loading ? <Loader /> : */}


              {/* <div className="container " >
                <div className="row">
                  <div className="col-12 d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "100vh" }}>
                     <FormModel name="Login" /> 
                    <br />
                    <Button onClick={() => props.history.goBack()}>Go Back</Button>
                  </div>
                </div>
              </div>
          }
        </>
      )} */}
    </div>
  );
}
function Loader() {
  return (
    <div style={{height:"100vh", width: "100vw", overflow: "hidden", display: "flex",flexDirection: "column", alignItems:"center", justifyContent: "center" }}>
      <div className="loader"></div>
      <h4 style={{ margin: "15px auto", textAlign: "center" }}>Loading...</h4>
    </div>
  );
}




const mapStateToProps = (store) => ({
  allProducts: store.allProducts,
  currentuser: store.currentuser,
});

const mapDispatchToProps = (dispatch) => ({});

function TabPanel(props) {
  const { value, index, users, Dashboard, categories,orders,contact,quries,emailSubs } = props;

  return (
    <Grid  hidden={value !== index} item container >
      {value === index && (
        <>
          {Dashboard ? (
              <Grid container spacing={3}>

                <h1>Dasboard Things</h1>
              </Grid>
          ) : null}

          <div
            style={{ width: "100%", margin: "0 auto"}}
            container

            // className={useStyles.fixedHeightPaper}
          >
            {/* <Typography> */}
              {categories && (
                <>
                  <CategoriesManage/>
                 
                </>
              ) }
              {users && (
                <>
                  {/* <UsersManage /> */}
                  <h1>Users Manage </h1>
                </>
              )}
              {orders && (
                <>
                <h1>Ads Manage</h1>
                  {/* <ManageAds/> */}
                </>
              )}
              {quries && (
                <>
                  {/* <ManageOrders /> */}
                  <h1>Contact Manage</h1>
                </>
              )}
              {contact && (
                <>
                  {/* <ContactQueries /> */}
                  <h1>Auction manage</h1>
                </>
              )}
              {/* {quries && (
                <>
              
                  <h1>Help & support</h1>
                </>
              )} */}
              {emailSubs && (
                <>
                  {/* <EmailSubs /> */}
                  <h1>Email subscribers</h1>
                </>
              )}
            {/* </Typography> */}
          </div>
        </>
      )}
    </Grid>
  );
}
export default connect(mapStateToProps, null)(AdminPanel);

