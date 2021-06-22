import React, { useEffect } from "react";
import {
  Box,
  Divider,
  IconButton,
  LinearProgress,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../utils/Logo";
import { H2 } from "../Terms";
import { WhatsApp } from "../../images/icons/SocialIcons";
import { social } from "../utils/ShareDropdown";
import DetailsWrapper from "./DetailsWrapper";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" flexDirection="column">
      <Box minWidth={35}>
        <Typography variant="body1" color="textPrimary">{`${props.value.toFixed(
          2
        )}%`}</Typography>
      </Box>
      <Box width={`100%`} maxWidth={250}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: theme.palette.background.default,
  },
}));

const Location = (props) => (
  <svg viewBox="0 0 26 32" {...props}>
    <path
      fill="var(--color1, #000)"
      d="M12.8 1.333c6.48 0 11.733 5.253 11.733 11.733 0 4.285-1.972 8.489-5.193 12.312-2.373 2.816-5.364 5.288-6.54 5.288s-4.167-2.472-6.54-5.288c-3.221-3.822-5.193-8.027-5.193-12.312 0-6.48 5.253-11.733 11.733-11.733zm0 2.934a8.8 8.8 0 00-8.8 8.8c0 3.483 1.688 7.08 4.503 10.422a26.613 26.613 0 003.306 3.298c.435.36.991.763.991.763s.618-.455.991-.763a26.545 26.545 0 003.306-3.298c2.815-3.341 4.503-6.939 4.503-10.422a8.8 8.8 0 00-8.8-8.8z"
    />
    <path
      fill="var(--color-primary, #07c0de)"
      d="M8.4 13.067a4.4 4.4 0 118.8 0 4.4 4.4 0 01-8.8 0z"
    />
    <path
      fill="var(--color-secondary, #078562)"
      d="M14.267 13.067a1.467 1.467 0 10-2.935 0 1.467 1.467 0 002.935 0z"
    />
  </svg>
);

export const AdInner = () => {
  const classes = useStyles();
  const images = [
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/fd3298b9-3eba-4c8d-9c8a-96d366af1b86/12066ada-cb5e-408b-8469-1feb82e8f3fc.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/2fd5466a-7acd-4364-8531-54339ac22861/d4cc0773-bf3b-4ed2-a0f5-98f3ad01428f.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/8bb26a40-9b7b-4fad-87f0-8937209abfba/bcf42130-a2a2-4fd2-85de-4dbaa0c0d161.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/e705db76-7e5d-47c6-9b8a-bd67643a98ad/a9977481-431b-415f-ab8b-50dd7fe9be4d.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/e5fac692-b0ae-47a1-9ae4-b93d8b6e5e84/2afa0178-200b-4469-8fa1-61a1bcc822e6.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/f69511d2-44fd-4ff1-bc3f-6d9fe9810346/d7d6dcb9-ab85-4947-a300-03c380a3bfe6.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/cf8cffe9-7a0e-4c45-baca-289cc5c652a6/b74e20f3-58f3-410b-8604-5bd6c7d881a2.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/1c1023be-921f-452b-a5c5-bae34e943502/f4a4f7a0-0f77-4a94-b38d-9fd9cf2ec849.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/09e66e87-ac9e-4e75-b78a-c0141e777a18/d1f63611-270b-4e8c-b889-931c617683aa.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/914e6c15-2117-4aa2-b26d-22de2fa9db22/88a21dcf-f038-42bc-b20a-47d4b028353b.jpeg",
    "https://dropbox.pickymango.com/Dropbox_Files///PICKY_MANGO_ATTACHMENTS/AUCTIONS/MAIN_IMAG/THUMNAIL/3c6233a4-75cb-4390-8a32-d77b89ff4459/5febdbd0-e461-479e-bcdd-0a4ff10a8f96.jpeg",
  ];
  return (
    <div className={classes.bg}>
      <div className="p-2">
        <Paper>
          <div className="p-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-4">
                    <div className="inner_img shadow-sm">
                      <Logo
                        className="position-absolute img"
                        style={{ maxWidth: `100%`, maxHeight: `100%` }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 col-8 py-2">
                    <Typography variant="h4" className="mb-2">
                      Picky Mango
                    </Typography>
                    <Typography variant="body1" className="mb-1">
                      <Location width={13} className="me-2 d-inline-block" />
                      <b>Country</b>: Jordan
                    </Typography>
                    <LinearProgressWithLabel value={45} />
                    <Typography variant="body2">Job Success</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="px-4">
            <div className="row">
              <div
                className="col-lg-7"
                style={{ borderRight: `1px solid #eee` }}
              >
                <div className="pt-5">
                  <Typography variant="h3" className="mb-2">
                    New generation Apple headphones
                  </Typography>
                  <Typography variant="body1">
                    <b>Price</b>: 240 SAR
                  </Typography>
                  <Typography variant="body1">
                    <b>Category</b>: Mobile phones and their accessories
                  </Typography>
                  <H2 variant="h6" className="my-2">
                    Contact The Seller At
                  </H2>
                  <div>
                    <a
                      className="text-decoration-none"
                      href="https://wa.me/+1234567890"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        style={{ backgroundColor: `#60ba4f`, color: `#fff` }}
                      >
                        <WhatsApp width={20} fill="currentColor" />
                      </IconButton>
                      <span className="h5 mx-3">+1234567890</span>
                    </a>
                  </div>
                  <H2 variant="h6" className="my-2">
                    Share
                  </H2>
                  <div className=" mb-3">
                    {social.map((el) => (
                      <IconButton
                        component="a"
                        href={el.url(window.location.toString())}
                        className="me-2"
                        title={el.name}
                        target="_blank"
                        rel="noreferrer"
                        style={{ backgroundColor: el.color, color: `#fff` }}
                      >
                        <el.Icon fill="currentColor" width={20} />
                      </IconButton>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="py-4">
                  <Swiper
                    autoplay={{ disableOnInteraction: false, delay: 2500 }}
                    speed={500}
                    initialSlide={0}
                    navigation={true}
                    grabCursor
                    loop
                    className="unaffected"
                    style={{ overflowY: `visible`, paddingBottom: `3.6rem` }}
                  >
                    {images.map((el, i) => (
                      <SwiperSlide>
                        <img src={el} className="w-100" alt="skjw" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

const Details = () => {
  useEffect(() => {
    document.body.style.overflow = `hidden`;
    return () => (document.body.style.overflow = `visible`);
  }, []);
  return (
    <DetailsWrapper url={"/ad-detail/nano"}>
      <AdInner />
    </DetailsWrapper>
  );
};

export default Details;
