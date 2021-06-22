import { Menu, MenuItem, useTheme, withStyles } from "@material-ui/core";
import React from "react";
import usePopup from "../../hooks/usePopup";
import { Facebook, Twitter, WhatsApp } from "../../images/icons/SocialIcons";
const icons = { Facebook, WhatsApp, Twitter };

const items = [
  {
    name: "Facebook",
    url: (url) => `https://facebook.com/sharer/sharer.php?u=${url}`,
    color: `#4267B2`,
  },
  {
    name: "Twitter",
    url: (url) => `https://twitter.com/intent/tweet/?text=${url}`,
    color: `#1DA1F2`,
  },
  {
    name: "WhatsApp",
    url: (url) => `whatsapp://send?text=${url}`,
    color: `#4fce5d`,
  },
];

export const social = items.map((el) => ({ ...el, Icon: icons[el.name] }));

const CustomMenuItem = withStyles((theme) => ({
  root: {
    color: (props) => props.color,
    "&:hover": {
      color: (props) => props.color,
    },
  },
}))(MenuItem);
const ShareDropdown = ({ url, open, handleClose, onClick }) => {
  // const { setSuccess } = usePopup();
  // const theme = useTheme();
  // async function copyToClipboard(text = "") {
  //   await navigator.clipboard.writeText(text);
  //   setSuccess(new Error("Copied to Clipboard"));
  // }
  return (
    <>
      <Menu
        component="nav"
        onClick={onClick}
        onClose={handleClose}
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
      >
        <CustomMenuItem
          onClick={() => {
            // copyToClipboard(url);
            handleClose();
          }}
          button
          // color={theme.palette.primary.main}
        >
          {" "}
          Copy to Clipboard{" "}
        </CustomMenuItem>
        {social.map((el) => (
          <CustomMenuItem
            target="_blank"
            onClick={() => handleClose()}
            component="a"
            href={el.url(url)}
            button
            color={el.color}
          >
            {" "}
            <el.Icon width={20} fill="currentColor" className="me-2" />{" "}
            {el.name}{" "}
          </CustomMenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ShareDropdown;
