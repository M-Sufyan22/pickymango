import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Bounce } from "react-reveal";
import AdCard from "../utils/AdCard";
import { Paper } from "@material-ui/core";
import AuctionCard from "../utils/AuctionCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Bounce left when={value === index}>
        {value === index && (
          <div className="container-fluid">
            <div className="row">{children}</div>
          </div>
        )}
      </Bounce>
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function View() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ads_auctions = Array.from(Array(10).keys());
  return (
    <div className="container my-5">
      <Paper className="overflow-hidden">
        <AppBar color="default" position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab fullWidth label="Ads" {...a11yProps(0)} />
            <Tab fullWidth label="Auctions" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <div className="py-4">
          <TabPanel value={value} index={0}>
            {ads_auctions.map((el) => (
              <div className="col-lg-6 py-2">
                <AdCard when />
              </div>
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {ads_auctions.map((el) => (
              <div className="col-lg-6 py-2">
                <AuctionCard when />
              </div>
            ))}
          </TabPanel>
        </div>
      </Paper>
    </div>
  );
}

export default View;
