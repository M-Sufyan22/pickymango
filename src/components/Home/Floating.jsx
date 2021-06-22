import { Paper, Typography } from "@material-ui/core";
import React from "react";
import Logo from "../utils/Logo";
const Floating = () => {
  return (
    <div>
      <div className="container">
        <Typography
          variant="h2"
          className="pt-4 pb-3 text_colored fw-bold text-center"
        >
          شركاؤنا
        </Typography>
        <div className="overflow-hidden py-2">
          <div className="animation-linear" speed={400}>
            <span className="d-inline-block px-3">
              <Paper elevation={3}>
                <Logo width={200} />
              </Paper>
            </span>
            <span className="d-inline-block px-3 pl-5">
              <Paper elevation={3}>
                <Logo width={200} />
              </Paper>
            </span>
            <span className="d-inline-block px-3">
              <Paper elevation={3}>
                <Logo width={200} />
              </Paper>
            </span>
            <span className="d-inline-block px-3">
              <Paper elevation={3}>
                <Logo width={200} />
              </Paper>
            </span>
            <span className="d-inline-block px-3">
              <Paper elevation={3}>
                <Logo width={200} />
              </Paper>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Floating;
