import React from "react";
import styles from "./DevelopmentRoadmap.module.css";
import roadmapRoad from "assets/images/roadmap-road.png";
import roadmapRoad2 from "assets/images/roadmap-road-2.png";

import roadmapbar from "assets/images/roadmap-bar.png";
import roadmapbarcircle from "assets/images/roadmap-bar-circle.png";

const RoadmapCard = ({ title, desc }) => {
  return (
    <div className={`${styles.roadmapCard} text-center`}>
      <div className={styles.roadmapBar}>
        <img src={roadmapbar} alt="" />
        <img src={roadmapbarcircle} alt="" />
      </div>
      <h1
        className={`${styles.cardTitle} fs-30px font-gilroy-black white lh-1 mb-20px`}
      >
        {title}
      </h1>
      <p className="fs-18px font-gilroy-light weight-3 lh-1_6 white opacity-0_7">
        {desc}
      </p>
    </div>
  );
};

function DevelopmentRoadmap() {
  return (
    <div className="container-wrapper">
      <header className="text-center mb-70px">
        <h1 className="fs-40px font-gilroy-light weight-3 mb-5px lh-1 white">
          Roadmap
        </h1>
        <h2 className="text-gradient fs-70px font-gilroy-black">
          Development Roadmap
        </h2>
      </header>

      {/* <main className={styles.cards}>
        <img src={roadmapRoad} className={styles.road} alt="" />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
      </main> */}

      <main className={styles.cards_2}>
        {/* <img src={} className={styles.road_2} alt="" /> */}

        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
        <RoadmapCard
          title="June 2017"
          desc="Pacific argentine. Lined sole masu salmon wolffish cutthroat trout mustard eel huchen, sea toad grenadier madtom yellow moray Shingle Fish wrymouth giant"
        />
      </main>
    </div>
  );
}

export default DevelopmentRoadmap;
