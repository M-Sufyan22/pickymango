import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import CustomInput from "../utils/CustomInput";
import { Button, Typography } from "@material-ui/core";
import LoginButtons from "../utils/LoginButtons";
import usePopup from "../../hooks/usePopup";
import { Autocomplete } from "@material-ui/lab";
import { location } from "../utils/Searchbar";
import { useLanguage } from "../../hooks/useLanguage";

const SignUp = () => {
  const {
    login: [, setLoginOpen],
    signup: [open, setOpen],
  } = usePopup();
  const onClose = () => setOpen(false);
  const { language } = useLanguage();
  return (
    <div>
      <Dialog
        PaperProps={{ style: { maxWidth: 400 } }}
        maxWidth="xs"
        className={language.direction}
        onClose={onClose}
        open={open}
      >
        <DialogContent className="custom_scrollbar" dividers>
          <Typography className="text-center fw-bold mt-3 mb-4" variant="h4">
            Sign Up to <span className="text_sec">Picky</span>{" "}
            <span className="text_colored">Mango</span>
          </Typography>
          <LoginButtons page="Continue" />
          <div className="or py-3">
            <span className="d-inline-block px-3">OR</span>
          </div>
          <CustomInput label="First Name" />
          <CustomInput label="Last Name" />
          <CustomInput label="Username" />
          <CustomInput label="Phone Number" />
          <CustomInput type="email" label="Email" />
          <CustomInput type="password" label="Password" />
          <CustomInput type="password" label="Confirm Password" />
          <Autocomplete
            id="custom-input-demo"
            options={location}
            clearOnEscape
            openOnFocus
            renderInput={(params) => {
              return (
                <div ref={params.InputProps.ref}>
                  <CustomInput {...params.inputProps} label="Countries" />
                </div>
              );
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={`my-2`}
            fullWidth
            size="large"
          >
            Join Us!
          </Button>
        </DialogContent>

        <DialogActions className="py-2 justify-content-center">
          Already a Member &nbsp;{" "}
          <a
            onClick={(e) => {
              e.preventDefault();
              onClose();
              setLoginOpen(true);
            }}
            href="#!"
          >
            Sign Up !
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignUp;
