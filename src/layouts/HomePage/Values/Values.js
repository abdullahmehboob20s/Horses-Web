import React from "react";
import styles from "./Values.module.css";
import lightIcon from "assets/images/light.png";
import giftIcon from "assets/images/gift.png";
import timeIcon from "assets/images/time.png";
import collectiveIcon from "assets/images/collective.png";
import communityIcon from "assets/images/community.png";
import holderIcon from "assets/images/holder.png";

const Card = ({ img, title, desc }) => {
  return (
    <div className={`${styles.card} text-center`}>
      <div className="mb-30px">
        <div
          className={`${styles.cardIcon} margin-center bg-gradient w-fit-content`}
        >
          <img src={img} alt="" />
        </div>
      </div>
      <p className="fs-24px white font-gilroy-bold mb-20px lh-1">{title}</p>
      <p className="fs-18px lh-1_7 white opacity-0_7 font-gilroy-light weight-3">
        {desc}
      </p>
    </div>
  );
};

function Values() {
  return (
    <div className="container-wrapper">
      <header className="text-center mb-70px">
        <h1 className="fs-40px font-gilroy-light weight-3 mb-5px lh-1">
          SOME FACTS
        </h1>
        <h2 className="text-gradient fs-70px font-gilroy-black">OUR VALUES</h2>
      </header>

      <main className={`${styles.cards} mb-100px`}>
        <Card
          img={lightIcon}
          title="Innovation"
          desc="With the Billionaire Club, ART becomes useful. You will discover different ways to use your goods in the next phases."
        />
        <Card
          img={giftIcon}
          title="Unique"
          desc="Once you acquire an NFT from the Billionaire Club collection, you will be the only holder on this universe and beyond."
        />
        <Card
          img={timeIcon}
          title="Long-term"
          desc="Don't get involved with the hype, choose consistency. The Billionaire Club project is designed to evolve and expand."
        />
        <Card
          img={collectiveIcon}
          title="Collective"
          desc="With the Billionaire Club, ART becomes useful. You will discover different ways to use your goods in the next phases."
        />
        <Card
          img={holderIcon}
          title="Community"
          desc="Be part of a smart and ambitious community. Common goals, make common success."
        />
        <Card
          img={communityIcon}
          title="Place Holder"
          desc="Valuable outcome + Metaverse + FUN+ Work hard celebrate hard"
        />
      </main>

      <footer>
        <button
          className={`${styles.footerBtn} fs-20px white font-gilroy-bold uppercase pointer margin-center block w-fit-content`}
        >
          Join us to register for presale
        </button>
      </footer>
    </div>
  );
}

export default Values;
