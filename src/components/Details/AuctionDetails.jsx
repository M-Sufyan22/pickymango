import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
  TextField,
  Typography,
  Collapse,
} from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../utils/Logo";
import { H2 } from "../Terms";
import { WhatsApp } from "../../images/icons/SocialIcons";
import FullCounter from "../utils/FullCounter";
import { social } from "../utils/ShareDropdown";
import { useLanguage } from "../../hooks/useLanguage";
import DetailsWrapper from "./DetailsWrapper";
import Collapseable from "../utils/Collabseable";

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

const GraphIcon = (props) => (
  <svg width={16} viewBox="0 0 32 32" {...props}>
    <path
      fill="var(--color4, #00b287)"
      d="M24 4.895a2 2 0 110-4h5.834C30.915.812 32 1.628 32 2.893v6a2 2 0 11-4 0V7.735l-8.586 8.572a2 2 0 01-2.828 0l-5.755-5.755L3.88 29.576a2 2 0 11-3.759-1.367l8-22a2 2 0 013.294-.731l6.608 6.608 7.162-7.192h-1.184z"
    />
  </svg>
);

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: theme.palette.background.default,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  sec: {
    [theme.direction === "ltr" ? "left" : "right"]: `auto`,
    [theme.direction !== "ltr" ? "left" : "right"]: 16,
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

export const AuctionInner = () => {
  const classes = useStyles();
  const { language } = useLanguage();
  const [price, setPrice] = useState(90000);
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
  function m(n, a = 1) {
    let x = ("" + n).length,
      p = Math.pow,
      d = p(10, a);
    x -= x % 3;
    return Math.round((n * d) / p(10, x)) / d + " kMBTPE"[x / 3];
  }
  const [open, setOpen] = useState(false);
  return (
    <>
      <Paper className="p-4">
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
          <div className="col-lg-6">
            <FullCounter time="07 07 2021" />
          </div>
          <div className="col-12">
            <Collapseable hide name="Terms & Conditions">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur ipsum eum nesciunt laborum, sequi, debitis fuga, nemo
              voluptatibus molestiae quam provident pariatur itaque molestias?
              Cum ullam vero dicta nam quae!
            </Collapseable>
          </div>
        </div>
      </Paper>
      <Divider />
      {[1, 2, 3, 4, 5].map((el) => (
        <div className={classes.bg}>
          <div className="py-4 px-3">
            <div>
              <Paper className="">
                <div className="row mx-0">
                  <div
                    className="col-lg-6"
                    style={{ borderRight: `1px solid #eee` }}
                  >
                    <div className="pt-5">
                      <Typography variant="h3" className="mb-2">
                        New generation Apple headphones
                      </Typography>
                      <div className="py-4">
                        <Swiper
                          autoplay={{
                            disableOnInteraction: false,
                            delay: 2500,
                          }}
                          speed={500}
                          initialSlide={0}
                          navigation={true}
                          grabCursor
                          loop
                          className="unaffected"
                          style={{
                            overflowY: `visible`,
                            paddingBottom: `3.6rem`,
                          }}
                        >
                          {images.map((el, i) => (
                            <SwiperSlide>
                              <img src={el} className="w-100" alt="skjw" />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
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
                            style={{
                              backgroundColor: `#60ba4f`,
                              color: `#fff`,
                            }}
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
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="p-3 linear">
                        <div className="text-white p-3">
                          <Typography variant="h3" className="mb-2">
                            Bid
                          </Typography>
                          <div className="row">
                            <div className="col">
                              <Typography variant="h6" className="mb-2">
                                Min Value: {m(16000)}
                              </Typography>
                            </div>
                            <div className="col">
                              <Typography variant="h6" className="mb-2">
                                Max Value: {m(90000000000)}
                              </Typography>
                            </div>
                          </div>

                          <TextField
                            color="secondary"
                            fullWidth
                            readonly
                            value={price.toLocaleString() + "S.A.R"}
                            className="bg-white unaffected app rounded mb-3"
                            inputProps={{ className: `p-3 text-center` }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <div>
                                    <IconButton
                                      onClick={() => setPrice((p) => p - 10000)}
                                      className="rounded-0"
                                    >
                                      <span
                                        className="d-flex justify-content-center align-items-center"
                                        style={{ width: 25, height: 25 }}
                                      >
                                        -
                                      </span>
                                    </IconButton>
                                  </div>
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <div>
                                    <IconButton
                                      onClick={() => setPrice((p) => p + 10000)}
                                      className="rounded-0"
                                    >
                                      <span
                                        className="d-flex justify-content-center align-items-center"
                                        style={{ width: 25, height: 25 }}
                                      >
                                        +
                                      </span>
                                    </IconButton>
                                  </div>
                                </InputAdornment>
                              ),
                            }}
                            type="text"
                          />
                          <Button fullWidth color="default" variant="contained">
                            Participate in the auction
                          </Button>
                        </div>

                        <List component="nav">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
                            <div className="bg-white round mb-2 p-3">
                              <ListItem className="px-0" component="div">
                                <ListItemAvatar>
                                  <Avatar
                                    className={`bg-white shadow-sm mx-2 ${classes.large}`}
                                  >
                                    <Logo
                                      style={{
                                        maxWidth: `100%`,
                                        maxHeight: `100%`,
                                      }}
                                    />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                  className={language.direction}
                                  primary="Picky Mango"
                                  secondary={920 - (el - 1) * 64}
                                  style={{ textAlign: "initial" }}
                                />
                                <ListItemSecondaryAction
                                  className={classes.sec}
                                >
                                  {m(9200 - (el - 1) * 100)} S.A.R <GraphIcon />
                                </ListItemSecondaryAction>
                              </ListItem>
                            </div>
                          ))}
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const AuctionDetails = () => {
  useEffect(() => {
    document.body.style.overflow = `hidden`;
    return () => (document.body.style.overflow = `visible`);
  }, []);
  return (
    <DetailsWrapper url={"/auction-detail/nano"}>
      <AuctionInner />
    </DetailsWrapper>
  );
};

export default AuctionDetails;
