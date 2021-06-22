import { IconButton, makeStyles, Paper } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import ArrowRight from "../../images/icons/ArrowIcon";
const useStyles = makeStyles((theme) => ({
  backdrop: {
    backgroundColor: theme.palette.action.disabled,
    position: `fixed`,
    top: 0,
    left: 0,
    width: `100%`,
    height: `100vh`,
    zIndex: 100,
    display: `flex`,
    justifyContent: `flex-end`,
  },
  front: {
    height: `100%`,
    width: `1200px`,
    maxWidth: `100%`,
    overflow: `auto`,
    backgroundColor: `#fff`,
    position: `relative`,
    zIndex: 101,
  },
  bg: {
    backgroundColor: theme.palette.background.default,
  },
}));

const DetailsWrapper = ({ children, url }) => {
  const { push } = useHistory();
  const classes = useStyles();
  const { language } = useLanguage();
  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      className={classes.backdrop}
    >
      <div onClick={() => push("/")} className={classes.backdrop}></div>
      <motion.div
        animate={{ x: 0 }}
        exit={{
          x: (language.direction === "ltr" ? 1 : -1) * window.innerWidth,
        }}
        transition={{ delay: 100, x: { type: "tween", stiffness: 100 } }}
        initial={{
          x: (language.direction === "ltr" ? 1 : -1) * window.innerWidth,
        }}
        className={classes.front}
      >
        <Paper
          style={{ top: 0, zIndex: 10 }}
          className="container-fluid rounded-0 position-sticky"
        >
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <IconButton onClick={() => push("/")} className="my-2">
                  <ArrowRight
                    style={{
                      transform: `rotate(180deg)`,
                    }}
                    fill="currentColor"
                    width={20}
                  />
                </IconButton>
              </div>
              <a
                href={`${window.location.origin}${url}`}
                target="_blank"
                rel="noreferrer"
                className="nav_link text-decoration-none text-capitalize position-relative"
              >
                open in new window
              </a>
            </div>
          </div>
        </Paper>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default DetailsWrapper;
