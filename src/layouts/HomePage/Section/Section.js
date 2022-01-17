import React from "react";
import styles from "./Section.module.css";
import welcomeImg from "assets/images/welcome-img.png";
import Image from "components/ImageMirrorEffect/ImageMirrorEffect";
import useMediaQuery from "hooks/useMediaQuery";

function Section() {
  const isBellowThousand = useMediaQuery("(max-width: 1000px)");
  const isBellowSix100 = useMediaQuery("(max-width: 600px)");

  return (
    <div className="container-wrapper">
      <div className={`${styles.section} horse_section`}>
        {isBellowThousand ? (
          ""
        ) : (
          <div className={styles.section_left}>
            <Image img={welcomeImg} />
          </div>
        )}
        <div className={styles.section_right}>
          <h5 className="fs-40px white font-gilroy-light uppercase mb-15px">
            Welcome to the
          </h5>
          <h1 className="fs-60px white font-gilroy-bold uppercase mb-30px lh-1">
            <span className="text-gradient font-gilroy-bold uppercase">
              Cryptostallions
            </span>{" "}
            Club (CSC)
          </h1>

          {isBellowThousand ? (
            <Image
              img={welcomeImg}
              style={{
                width: "100%",
                maxWidth: "400px",
                margin: "0 auto",
                marginTop: isBellowSix100 ? "30px" : "50px",
                marginBottom: isBellowSix100 ? "30px" : "70px",
              }}
            />
          ) : (
            ""
          )}

          <p className="fs-20px font-gilroy-light mb-30px lh-1_4 gray">
            The CRYPTOSTALLIONS CLUB is a private and scarce collection of 10
            000 Stallions NFTs—unique digital art and collectibles. Having
            underlying smart contract The CSC NFTs are stored as ERC-721 tokens
            on the Ethereum blockchain and hosted on IPFS.
          </p>
          <p className="fs-20px font-gilroy-light mb-30px lh-1_4 gray">
            With more than 180+ hand drawn traits, each NFT is unique and
            unlocks different levels of access, activities and benefits
            inherently through the smart contract attached with each investment.
          </p>
          <p className="fs-20px font-gilroy-light mb-30px lh-1_4 gray">
            The Stallions NFTs are launching on december 5th. The reveal is on
            December the 7th 2021. Join an ambitious ever-growing community of
            successful investors with NFTs having multiple utilities and
            benefits.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section;
