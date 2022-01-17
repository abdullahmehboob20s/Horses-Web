import React, { useRef } from "react";
import styles from "./NFTS.module.css";

import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";

import nft1 from "assets/images/nft-1.png";
import nft2 from "assets/images/nft-2.png";
import nft3 from "assets/images/nft-3.png";
import nft4 from "assets/images/nft-4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Navigation, Pagination]);

function NFTS() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper py-100px">
        <h1 className="text-center text-gradient fs-70px font-gilroy-black mb-70px">
          OUR NFT’s
        </h1>

        <div className={styles.nftSlider}>
          <button className="pointer lh-1" ref={navigationPrevRef}>
            <HiOutlineArrowSmLeft size={28} />
          </button>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            pagination={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="nftCollectionSwiper"
          >
            <SwiperSlide>
              <img src={nft1} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft2} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft3} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft4} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft1} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft2} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft3} className="w-full" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={nft4} className="w-full" alt="" />
            </SwiperSlide>
          </Swiper>
          <button className="pointer lh-1" ref={navigationNextRef}>
            <HiOutlineArrowSmRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NFTS;
