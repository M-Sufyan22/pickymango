import { Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Fade, Roll } from "react-reveal";
import Tada from "react-reveal/Tada";
import { useLanguage } from "../../hooks/useLanguage";
import Logo from "../utils/Logo";
import { H2 } from "../Terms";
import { Link } from "react-router-dom";

const Footer = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () =>
      setScroll(window.scrollY >= window.innerHeight / 2);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const { language } = useLanguage();
  return (
    <Paper component="footer" elevation={4} className="py-5 mt-4">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3 col-6 px-0">
                <Fade left>
                  <Logo className="w-100" />
                </Fade>
              </div>
            </div>
          </div>
          <div className="w-100 my-4" />
          <div className="col-lg-2">
            <Fade left>
              <h6>
                <b>Love The Hustle.</b>
              </h6>
              <p
                className="text-dark-50 font-weight-bold"
                style={{ fontSize: "0.7rem" }}
              >
                © 2020 Picky Mango Inc. <br /> All Rights Reserved
              </p>
            </Fade>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <h4 className="font-weight-bold">
                  {language.shorthand === "EN" ? (
                    <Roll cascade left>
                      One of the leading international Web based Online Auction
                      Houses
                    </Roll>
                  ) : (
                    "واحدة من دور المزادات العالمية الرائدة على الإنترنت القائمة على الويب"
                  )}
                </h4>
              </div>
              <div className="w-100 my-4" />
              <div className="col-lg-4 col-6 my-4">
                <H2 variant="h6" className="mb-2 font-weight-bold">
                  Start a Conversation
                </H2>
                <Tada>
                  <div>
                    <a
                      href="/"
                      className="font-weight-bold footer_link header_link active d-inline-block"
                      style={{ fontSize: "0.9rem" }}
                    >
                      text@example.com
                    </a>
                  </div>
                  <div>
                    <a
                      href="/"
                      className="font-weight-bold footer_link header_link active d-inline-block"
                      style={{ fontSize: "0.9rem" }}
                    >
                      +1 233 456 0789
                    </a>
                  </div>
                </Tada>
              </div>
              <div className="col-lg-4 col-6 my-4">
                <H2 variant="h6" className="mb-2 font-weight-bold">
                  Picky Mango
                </H2>
                <Tada>
                  <div>
                    <Link
                      to="/terms"
                      className="font-weight-bold footer_link header_link active d-inline-block"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/privacy"
                      className="font-weight-bold footer_link header_link active d-inline-block"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Privacy Policy
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/faq"
                      href="/"
                      className="font-weight-bold footer_link header_link active d-inline-block"
                      style={{ fontSize: "0.9rem" }}
                    >
                      FAQ
                    </Link>
                  </div>
                </Tada>
              </div>
              <div className="col-lg-4 col-12">
                <div className="row text-white-50">
                  <div className="col-12">
                    <h6 className="font-weight-bold mb-4">Contact Us</h6>
                  </div>
                  <div className="w-100" />
                  <div className="col">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </div>
                  <div className="col">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </div>
                  <div className="col">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </div>
                  <div className="col">
                    <i className="fab fa-google-plus-g" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
        className={`not scroll_to_top position-fixed text-decoration-none text-white${
          scroll ? " acitve" : ""
        }`}
      >
        ⇑
      </button>
    </Paper>
  );
};

export default Footer;
