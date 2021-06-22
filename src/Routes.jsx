import React from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Layout/Footer";import Header from "./components/Layout/Header";
import { withRouter } from "react-router";
const components = [
  { name: "Privacy", path: "/privacy" },
  { name: "Terms", path: "/terms" },
  { name: "Home", path: "/" },
  { name: "PlaceAds", path: "/place-ads" },
  { name: "PlaceAuctions", path: "/place-auctions" },
  { name: "Details/AdDetails", path: "/ad-details/:id" },
  { name: "Details/AdDetails", path: "/ad-detail/:id", nested: "AdInner" },
  { name: "Details/AuctionDetails", path: "/auction-details/:id" },
  {
    name: "Details/AuctionDetails",
    path: "/auction-detail/:id",
    nested: "AuctionInner",
  },
  { name: "Contact", path: "/contact" },
  { name: "Faq", path: "/faq" },
  { name: "View_Ads_Auctions", path: "/view-ads-auctions" },
  { name: "adminPanel", path: "/AdminDashboard" },
];

const Routes = (props) => {
  return (
    <>
    {props.location.pathname && props.history.location.pathname !== "/AdminDashboard" &&
    <Header />
    }
    <Route
      render={({ location }) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return (
          <div style={{ position: "relative" }}>
            <AnimatePresence>
              <Switch location={location} key={location.pathname}>
                {components.map((el) => {
                  const Component = require(`./components/${el.name}`)[
                    el.nested || "default"
                  ];
                  return (
                    <Route path={el.path} exact>
                      <Component {...el.props} />
                    </Route>
                  );
                })}
              </Switch>
            </AnimatePresence>
          </div>
        );
      }}
    />
    {props.location.pathname && props.history.location.pathname !== "/AdminDashboard" &&
    <Footer />
    }
    </>
  );
};

export default withRouter(Routes);
