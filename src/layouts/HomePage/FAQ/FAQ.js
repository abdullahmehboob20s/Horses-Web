import Accordion from "components/Accordion/Accordion";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./FAQ.module.css";

function FAQ() {
  const isBellow600 = useMediaQuery("(max-width: 500px)");

  return (
    <div className={styles.faqWrapper}>
      <div className="container-wrapper">
        <header
          className={`text-center ${isBellow600 ? "mb-60px" : "mb-100px"}`}
        >
          <h1 className="white fs-40px font-gilroy-light weight-3 lh-1 mb-10px">
            FAQ
          </h1>
          <h1 className=" text-gradient font-gilroy-black fs-70px lh-1 uppercase">
            FREQUENTLY ASKED <br /> QUESTIONS
          </h1>
        </header>

        <main className={`${styles.faqs} mb-100px`}>
          <Accordion
            question="Where can i view my nfts?"
            answer="Once minted, simply connect to your OpenSea account to view your NFTs."
          />
          <Accordion
            question="Where can i view my nfts?"
            answer="Once minted, simply connect to your OpenSea account to view your NFTs."
          />
          <Accordion
            question="What is metaverse?"
            answer="The Metaverse refers to a shared virtual experience where land, avatars and names can be bought and sold, often using cryptocurrency. The future phases in the Billionaire club's roadmap will allow you to join this Metaverse using the assets you own."
          />
          <Accordion
            question="What are the golden guests?"
            answer="The Golden Guests are the rarest NFTs of the Party Ape Billionaire Club. Holding one of them (by lucky mint or through secondary market) opens the doors to many advantages and rewards. They will also be considered as VIP members of the community."
          />
          <Accordion
            question="Why do we need royalties?"
            answer="The amount of royalties was fixed at 10% to finance the Billionaire Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests. The funds collected will benefit the holders. This percentage can decrease over time."
          />
          <Accordion
            question="why did you choose apes?"
            answer="When we created the Billionaire Club, the team was looking for a realistic way to embody human features. After many discussions, we ended up agreeing on the fact that there was no better and smarter creature than the one pointed by Darwin's theory as being the human ancestor : the ape."
          />
        </main>

        <form action="" className={styles.form}>
          <h1 className="text-center fs-40px font-gilroy-light weight-3 uppercase white">
            Register For Presale
          </h1>

          <input
            type="text"
            placeholder="Name"
            className="block fs-20px gray font-gilroy-light weight-3"
          />
          <input
            type="text"
            placeholder="Email"
            className="block fs-20px gray font-gilroy-light weight-3"
          />
          <button className="block fs-20px font-gilroy-black white pointer uppercase">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FAQ;
