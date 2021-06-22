import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  EffectCoverflow,
  Navigation,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import { Button, CardActionArea } from "@material-ui/core";
import { useLanguage } from "../../hooks/useLanguage";
import FullCounter from "../utils/FullCounter";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
SwiperCore.use([Pagination, EffectCoverflow, Navigation, Autoplay]);
const Slider = () => {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);
  const component = language.data.home.slider;
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
  const showSlides = () =>
    images.map((el, i) => (
      <SwiperSlide className={`px-2 pb-3 ${language.direction}`} key={i}>
        <CardActionArea component={Link} to="/auction-details/nano">
          <div className="container-fluid round">
            <div className="row flex-row-reverse">
              <div className="col-12 col-sm-12 col-md-7 position-relative">
                <div className="homeTanent-additionWrapper">
                  <div className="hero-additionBlock tanent-icon">
                    <img
                      alt="branding"
                      width="36px"
                      src="https://emazad.sa/assets/branding/images/icons/Thiqah.svg"
                    />
                    <div className="tanent-name">
                      <p className="on-top">خاصة</p>
                    </div>
                  </div>
                </div>
                <div className="hero-wrapper">
                  <div className="hero-cover">
                    <img alt="hero-cover" src={el} />
                  </div>
                  <div className="hero-additionWrapper">
                    <div className="hero-additionBlock">
                      <span className="text mb-3">{component.share_token}</span>
                      <span className="value">210,000</span>
                      <span className="symbol">{component.currency}</span>
                    </div>
                    <div className="hero-additionBlock">
                      <span className="text ">{component.from}</span>
                      <span className="mb-md-1 value">26/4/2021</span>
                      <span className="text">{component.to}</span>
                      <span className="value">10/6/2021</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col-12 col-sm-12 col-md-5`}>
                <Fade when={i === index} cascade top>
                  <div className="hero-body">
                    <h5 className="hero-info">{component.info}</h5>
                    <h3 className="hero-title">{component.title}</h3>
                    <p className="hero-desc text-truncate">
                      {component.category}
                    </p>
                    <FullCounter time="07 july 2021" />
                    <Button
                      variant="contained"
                      color="primary"
                      className="rounded-pill text-white mt-4"
                    >
                      {component.button}
                    </Button>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </CardActionArea>
      </SwiperSlide>
    ));
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="w-100">
        <div className="container hero">
          <Swiper
            autoplay={{ disableOnInteraction: false, delay: 2500 }}
            onSlideChange={(a) => setIndex(a.realIndex)}
            speed={500}
            style={{ overflowY: `visible` }}
            initialSlide={0}
            className="unaffected pt-4 pb-5"
            navigation={true}
            grabCursor
            loop
          >
            {showSlides()}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
