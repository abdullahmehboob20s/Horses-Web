import React from "react";
import styles from "./KeyToUnlock.module.css";

function KeyToUnlock() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.desc} bg-transparent `}>
        <h1 className="text-gradient fs-64px lh-1 font-gilroy-black uppercase mb-15px">
          The CRYPTOSTALLIONS NFTs -
        </h1>
        <h2 className="fs-30px white font-gilroy-light weight-3 uppercase mb-50px">
          The key that unlocks you into CSC’s world
        </h2>

        <p className="fs-20px white font-gilroy-light weight-3  mb-20px opacit-0_7">
          We are obsessed with making the CRYPTOSTALLIONS NFTs a valuable
          outcome for the Investors. CSC NFTs are all about utility and access
          in a way that The Inherent value of the STALLIONS smart contract
          should dramatically outpace the original investment made by you.
        </p>
        <p className="fs-20px white font-gilroy-light weight-3  mb-20px opacit-0_7">
          The Cryptostallions NFTs Holders will benefit from Club membership,
          funds,investments, VIP Tickets to concerts, green rooms, worldwide
          events, activities and much more other Surprises. Join the Party on
          December the 5th.
        </p>
      </div>
    </div>
  );
}

export default KeyToUnlock;
