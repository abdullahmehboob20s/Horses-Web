import ImageMirrorEffect from "components/ImageMirrorEffect/ImageMirrorEffect";
import React, { useState } from "react";
import styles from "./PreSale.module.css";
import guestImg from "assets/images/guest-img.png";
import guestImg2 from "assets/images/guest-img-2.png";
import guestImg3 from "assets/images/guest-img-3.png";
import guestImg4 from "assets/images/guest-img-4.png";
import useMediaQuery from "hooks/useMediaQuery";

function PreSale() {
  const isBellow = useMediaQuery("(max-width: 1000px)");
  const isBellow600 = useMediaQuery("(max-width: 600px)");
  const [image, setImage] = useState(guestImg);

  return (
    <div className="container-wrapper">
      <div className={styles.section}>
        <div className={styles.section_left}>
          <div className={isBellow ? "mb-50px" : "mb-70px"}>
            <h1 className="text-gradient text-center fs-70px font-gilroy-black mb-25px lh-1">
              Golden Guests
            </h1>

            <p className="fs-20px font-gilroy-light weight-3 text-center white opacity-0_7 lh-1_4">
              The Golden Guests edition by the Billionaire Club are the rarest
              NFTs. They are all hand drawn and have no element in common with
              the regular collection.
            </p>
          </div>
          {isBellow ? (
            <div className="mb-50px">
              <div className={styles.gallery}>
                <div className={isBellow600 ? "mb-30px" : "mb-70px"}>
                  <ImageMirrorEffect img={image} style={{ marginRight: 0 }} />
                </div>

                <div className={styles.galleryCards}>
                  <img
                    src={guestImg2}
                    onClick={() => setImage(guestImg2)}
                    className="w-full pointer"
                    alt=""
                  />
                  <img
                    src={guestImg3}
                    onClick={() => setImage(guestImg3)}
                    className="w-full pointer"
                    alt=""
                  />
                  <img
                    src={guestImg4}
                    onClick={() => setImage(guestImg4)}
                    className="w-full pointer"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <p className="text-center uppercase font-gilroy-light weight-3 fs-40px white mb-20px">
            Time For Presale
          </p>

          <div className="mb-30px">
            <input
              type="text"
              placeholder="Enter your email or code"
              className="fs-20px font-gilroy-light weight-3 gray"
            />
          </div>

          <button className="uppercase font-gilroy-black white fs-20px text-center block margin-center w-fit-content pointer">
            Submit
          </button>
        </div>

        {isBellow ? (
          ""
        ) : (
          <div className={styles.section_right}>
            <div className={styles.gallery}>
              <div className="mb-70px">
                <ImageMirrorEffect img={image} style={{ marginRight: 0 }} />
              </div>

              <div className={styles.galleryCards}>
                <img
                  src={guestImg2}
                  onClick={() => setImage(guestImg2)}
                  className="w-full pointer"
                  alt=""
                />
                <img
                  src={guestImg3}
                  onClick={() => setImage(guestImg3)}
                  className="w-full pointer"
                  alt=""
                />
                <img
                  src={guestImg4}
                  onClick={() => setImage(guestImg4)}
                  className="w-full pointer"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreSale;
