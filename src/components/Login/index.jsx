import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import CustomInput from "../utils/CustomInput";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import LoginButtons from "../utils/LoginButtons";
import usePopup from "../../hooks/usePopup";
import { useLanguage } from "../../hooks/useLanguage";

const Login = () => {
  const {
    login: [open, setOpen],
    signup: [, setSignupOpen],
  } = usePopup();
  const { language } = useLanguage();
  const onClose = () => setOpen(false);
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
            Sign In to <span className="text_sec">Picky</span>{" "}
            <span className="text_colored">Mango</span>
          </Typography>
          <LoginButtons page="Continue" />
          <div className="or py-3">
            <span className="d-inline-block px-3">OR</span>
          </div>
          <CustomInput type="email" label="Email" />
          <CustomInput type="password" label="Password" />
          <Button
            variant="contained"
            color="primary"
            className={`my-2`}
            fullWidth
            size="large"
          >
            Login
          </Button>
          <div className="my-2 d-flex justify-content-between align-items-center">
            <FormControlLabel
              control={<Checkbox color="primary" name="remember_me" />}
              label="Remember Me"
            />
            <a href="#!">Forgot Password?</a>
          </div>
        </DialogContent>

        <DialogActions className="py-2 justify-content-center">
          Not A Member? &nbsp;{" "}
          <a
            onClick={(e) => {
              e.preventDefault();
              onClose();
              setSignupOpen(true);
            }}
            href="#!"
          >
            Join Now !
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
