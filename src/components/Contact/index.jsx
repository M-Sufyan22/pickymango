import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { ReactComponent as ContactIcon } from "../../images/icons/mail.svg";
import CustomInput from "../utils/CustomInput";
import Logo from "../utils/Logo";

const Contact = () => {
  return (
    <div className="height">
      <Paper elevation={3} className="container round calc_height mt-5">
        <div className="row h-100">
          <div
            style={{ flexDirection: "column" }}
            className="col-lg-6 colored py-4 clipped d-flex justify-content-center align-items-center"
          >
            <ContactIcon className="drop_shadow" width={300} />
          </div>
          <div className="col-lg-6 py-5 position-relative">
            <Logo width={300} />
            <Typography variant="h1" className="title heading mb-3">
              Contact Us
            </Typography>
            <form id="submit_form" action="/">
              <Paper className="me-3">
                <CustomInput required label="Title" />
              </Paper>
              <Paper className="me-3 mt-5">
                <CustomInput
                  component="textarea"
                  required
                  rows={5}
                  label="Message"
                />
              </Paper>
              <div className="mt-4">
                <button className="submit-button state-0">
                  <span className="pre-state-msg">Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Contact;
