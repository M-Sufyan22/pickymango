import { Avatar, Button, CardActionArea, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { Bounce } from "react-reveal";
import { Link } from "react-router-dom";
import FullCounter from "./FullCounter";
import ShareDropdown from "./ShareDropdown";

const AuctionCard = ({ when = undefined }) => {
  const [open, setOpen] = useState(false);
  return (
    <Bounce when={when} top>
      <Paper className="profile p-0 box position-relative d-inline-block profile-long">
        <CardActionArea
          component={Link}
          className="p-3"
          to="/auction-details/nano"
        >
          <div className="row">
            <div className="col-4 px-0">
              <div className="profile__image">
                <img
                  src="https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/fd3298b9-3eba-4c8d-9c8a-96d366af1b86/12066ada-cb5e-408b-8469-1feb82e8f3fc.jpeg"
                  alt="Seller"
                  className="drop_shadow"
                />
              </div>
            </div>
            <div className="col-8 text-start">
              <div className="row w-100">
                <div className="col-12">
                  <div className="profile__info">
                    <h5>Nano protection adhesive</h5>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <p className="profile__stats__title fw-bold">Current price</p>
                  <p className="profile__stats__title fw-bold">Bids Count</p>
                </div>
                <div className="col-6">
                  <p className="profile__stats__title">10,000 S.A.R</p>
                  <p className="profile__stats__title">20</p>
                </div>
                <div className="col-12 profile__stats__title">
                  <b>Terms and Conditions:</b> Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-start align-items-center">
                  <Avatar
                    alt="SELLER"
                    src="https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/8b3346dc-7b9e-465c-91c6-f45feb238be4/8f3be4f4-0a94-47e0-ac95-909f2ce1edec.jpeg"
                  />
                  <div className="mx-2">SELLER NAME</div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between flex-column flex-sm-row align-items-center">
            <div>
              <FullCounter time="23:59:59 31 dec 2021" />
            </div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setOpen(e.currentTarget);
              }}
              color="primary"
            >
              Share
            </Button>
            <ShareDropdown
              onClick={(e) => {
                e.preventDefault();
              }}
              handleClose={() => setOpen(null)}
              open={open}
              url={`${window.location.host}/auction-details/nano`}
            />
          </div>
        </CardActionArea>
      </Paper>
    </Bounce>
  );
};

export default AuctionCard;
