import React from "react";
import logo from "../../images/logo.png";
const Logo = ({ component: Component = "img", ...props }) => {
  return <Component src={logo} {...props} alt="picky-mango" />;
};

export default Logo;
