import React from "react";
import styles from "./Roadmap.module.css";
import dollar from "assets/images/dollar.png";

const Card = ({ title, desc }) => {
  return (
    <div className="white text-center">
      <h1 className="fs-60px white font-gilroy-black mb-20px lh-1">{title}</h1>
      <h2 className="fs-18px font-gilroy-light weight-3 white opacity-0_7 lh-1_6 ">
        {desc}
      </h2>
    </div>
  );
};

function Roadmap() {
  return (
    <div className="container-wrapper">
      <header className="text-center mb-70px">
        <h1 className="fs-40px font-gilroy-light weight-3 mb-5px lh-1 white">
          Roadmap
        </h1>
        <h2 className="text-gradient fs-70px font-gilroy-black">
          Sales and Rewards
        </h2>
      </header>

      <main className={styles.roadmap}>
        <Card
          title="0%"
          desc="Pirate perch smooth dogfish, flagblenny delta smelt, gopher rockfish bramble shark Sevan trout queen triggerfish basslet. Redtooth triggerfish prickly shark tarwhine tube-eye Reef triggerfish rohu longfin dragonfish"
        />
        <Card
          title="20%"
          desc="Pirate perch smooth dogfish, flagblenny delta smelt, gopher rockfish bramble shark Sevan trout queen triggerfish basslet. Redtooth triggerfish prickly shark tarwhine tube-eye Reef triggerfish rohu longfin dragonfish"
        />
        <Card
          title="30%"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <Card
          title="40%"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <Card
          title="60%"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <Card
          title="80%"
          desc="Walleye silverside American sole rockweed gunnel, handfishyellowtail clownfish, rocket danio; blue gourami, ayu gulper eel false trevally longjaw mudsucker bonytail chub. Yellow moray french angelfish sand stargazer northern squawfish shiner dab mola yellow moray sea lamprey torrent catfish sauger blue gourami handfish Sacramento blackfish"
        />
        <Card
          title="100%"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <img src={dollar} alt="" />
      </main>
    </div>
  );
}

export default Roadmap;
