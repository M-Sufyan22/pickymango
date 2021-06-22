import { IconButton, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import ArrowRight from "../../images/icons/ArrowIcon";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  primary: {
    color: theme.palette.primary.main,
  },
}));

const Collapseable = ({ i = 0, name, children, hide }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <Paper className="shadow my-3 rounded-corners">
      <div
        className="py-3 px-4"
        style={{ cursor: `pointer` }}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="d-flex justify-content-center align-items-center">
          <Typography
            variant="h5"
            className={open && classes.primary}
            style={{ flexGrow: 1, fontWeight: `600` }}
          >
            {!hide && <>{i + 1})</>} {name}
          </Typography>
          <div>
            <IconButton className={open && classes.primary}>
              <ArrowRight
                fill="currentColor"
                width={12}
                style={{
                  transform: `rotate(${open ? 270 : 90}deg)`,
                  transition: `all 0.4s`,
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>
      <Collapse in={open}>
        <Typography variant="body1" className="p-4">
          {" "}
          {children}{" "}
        </Typography>
      </Collapse>
    </Paper>
  );
};

export default Collapseable;
