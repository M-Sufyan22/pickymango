import React from "react";
import { H2 } from "../Terms";
import Collapseable from "../utils/Collabseable";

const Faq = () => {
  return (
    <div>
      <div className="container py-4">
        <H2>FAQ</H2>
        <Collapseable name="Why Picky Mango?">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        </Collapseable>
      </div>
    </div>
  );
};

export default Faq;
