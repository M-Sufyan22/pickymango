import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import ArrowRight from "../../images/icons/ArrowIcon";
import AdCard from "../utils/AdCard";

const Ads = () => {
  const { language } = useLanguage();
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between container">
          <Typography variant="h3" className="my-4">
            Latest Ads
          </Typography>
          <div className="d-flex justify-content-center align-items-center">
            <Button
              component={Link}
              to="/view-ads-auctions"
              {...{
                [language.direction === "ltr" ? "endIcon" : "startIcon"]: (
                  <ArrowRight
                    style={{
                      transform: `rotate(${
                        language.direction === "ltr" ? 0 : 180
                      }deg)`,
                    }}
                    width={16}
                  />
                ),
              }}
              className="rounded-pill w-auto px-3 unaffected"
              color="primary"
            >
              See All
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <AdCard />
          </div>
          <div className="col-lg-6 mb-3">
            <AdCard />
          </div>
          <div className="col-lg-6 mb-3">
            <AdCard />
          </div>
          <div className="col-lg-6 mb-3">
            <AdCard />
          </div>
          <div className="col-lg-6 mb-3">
            <AdCard />
          </div>
          <div className="col-lg-6 mb-3">
            <AdCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
