import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { createContext, useContext, useEffect, useState } from "react";

const PopupContext = createContext();

const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children: rc }) => {
  const login = useState(false);
  const signup = useState(false);
  const [success, setSuccess] = useState(false);
  const value = { login, signup, setSuccess };
  const handleClosePopup = (reason, setOpen) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  useEffect(() => {
    if (success) {
      clearTimeout(window.success);
      window.success = setTimeout(() => setSuccess(false), 6000);
    }
  }, [success]);
  const children = (
    <>
      {rc}
      <Snackbar
        open={success && true}
        autoHideDuration={6000}
        onClose={(e, r) => handleClosePopup(r, setSuccess)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Alert
          onClose={(e, r) => handleClosePopup(r, setSuccess)}
          severity={"success"}
        >
          {success?.message}
        </Alert>
      </Snackbar>
    </>
  );
  return <PopupContext.Provider {...{ value, children }} />;
};

export default usePopup;
