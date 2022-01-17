import React from "react";
import styles from "./CountdownTimer.module.css";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import useMediaQuery from "hooks/useMediaQuery";

const Counter = ({ count, title }) => {
  return (
    <div className={styles.counterParent}>
      <div className={`${styles.counter} `}>
        <div
          className={`${styles.counter_count} bg-gradient fs-46px black text-center font-gilroy-black mb-10px`}
        >
          {count}
        </div>
        <p className="fs-24px white font-gilroy-light text-center">{title}</p>
      </div>
      <p className="white fs-50px weight-8">:</p>
    </div>
  );
};

function CountdownTimer() {
  const isBellow = useMediaQuery("(max-width: 500px)");

  return (
    <div className="container-wrapper py-100px">
      <div className={styles.wrapper}>
        <button
          className={`${styles.connectWalletBtn} mb-30px fs-20px white font-gilroy-bold pointer text-center uppercase bg-gradient`}
        >
          Connect Wallet (Soon)
        </button>

        <p className="fs-50px font-gilroy-bold uppercase mb-50px white">
          JANUARY 21ST 1PM EST
        </p>

        <div className={`${styles.counterWrapper} mb-50px`}>
          <Counter count={9} title="Days" />
          <Counter count={15} title={isBellow ? "Hrs" : "Hours"} />
          <Counter count={27} title={isBellow ? "Min" : "Minutes"} />
          <Counter count={25} title={isBellow ? "Sec" : `Seconds`} />
        </div>

        <div className={`${styles.btns} mb-50px`}>
          <div
            className={`${styles.itemsAvailable} fs-30px font-gilroy-bold text-center white mb-15px `}
          >
            0/10000
          </div>

          <button className="fs-20px font-gilroy-bold white text-center bg-orange block pointer w-full uppercase mb-15px">
            whitelist mint (max1)
          </button>
          <button className="fs-20px font-gilroy-bold white text-center bg-orange block pointer w-full uppercase">
            mint
          </button>
        </div>

        <div className={styles.counterTimer}>
          <button className="white pointer">
            <TiMinus size={30} />
          </button>
          <div className="fs-30px font-gilroy-bold text-center white">1</div>
          <button className="white pointer">
            <FaPlus size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
