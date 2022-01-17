import React from "react";
import styles from "./ArtCollection.module.css";
import artImg1 from "assets/images/art-img-1.png";
import artImg2 from "assets/images/art-img-2.png";
import artImg3 from "assets/images/art-img-3.png";
import artImg4 from "assets/images/art-img-4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";
import useMediaQuery from "hooks/useMediaQuery";
SwiperCore.use([Navigation, Pagination]);

function ArtCollection() {
  const isBellow = useMediaQuery("(max-width: 500px)");

  return (
    <div className="container-wrapper">
      <div className={styles.wrapper}>
        <div className="mb-60px">
          <div className={`${styles.header} text-center`}>
            <h1 className="font-gilroy-black uppercase text-center fs-70px text-gradient lh-1 mb-15px">
              The newn Art of Exclusive Clubs for an exclusive Community
            </h1>
            <h2 className="fs-40px font-gilroy-light weight-3 text-center white uppercase">
              The STALLIONS Club
            </h2>
          </div>
        </div>

        <div className={`mb-50px`}>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            pagination={true}
            className={isBellow ? "nftCollectionSwiper" : ""}
            style={{ paddingBottom: isBellow ? "50px" : "" }}
            breakpoints={{
              1000: {
                spaceBetween: 50,
                slidesPerView: 4,
              },
              700: {
                spaceBetween: 20,
                slidesPerView: 4,
              },
              500: {
                spaceBetween: 20,
                slidesPerView: 3,
              },
              450: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              200: {
                spaceBetween: 20,
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <img src={artImg1} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={artImg2} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={artImg3} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={artImg4} className="w-full" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <footer>
          <p className="text-center fs-20px white  font-gilroy-light weight-3  opacit-0_5 lh-1_4">
            The CRYPTOSTALLIONS Club is exclusively made for the most
            influential people of our planet, who dream big, believe and are
            passionate in/about the future of Crypto, collectables, gaming and
            the Metaverse. Join us to the CSC Party and be part of this amazing
            ambicious community!
          </p>
        </footer>
      </div>
    </div>
  );
}

export default ArtCollection;
