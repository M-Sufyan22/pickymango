import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { Bounce, Fade } from "react-reveal";

const About = () => {
  const { language } = useLanguage();
  return (
    <div
      className="d-flex about_section justify-content-center align-items-center"
      style={{ minHeight: `100vh` }}
    >
      <div
        className="container h5 text-center"
        style={{ maxWidth: `992px`, lineHeight: 1.5 }}
      >
        <div>
          <Typography variant="h2" className="mb-3">
            Welcome To{" "}
            <Typography component="span" variant="h2" color="primary">
              Picky
            </Typography>{" "}
            <Typography component="span" variant="h2" color="secondary">
              Mango
            </Typography>
          </Typography>
          <Fade top cascade>
            <Typography variant="h6">
              {language.data.home.about.content}
            </Typography>
          </Fade>
          <Bounce top cascade>
            <div className="mt-3 unaffected">
              <Button
                variant="contained"
                size="large"
                className="px-5 py-3 me-3"
                color="primary"
              >
                Place Auctions
              </Button>
              <Button
                variant="contained"
                size="large"
                className="px-5 py-3"
                color="secondary"
              >
                Place Ads
              </Button>
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
};

export default About;
