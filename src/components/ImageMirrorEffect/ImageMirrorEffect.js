import React from "react";
import styles from "./ImageMirrorEffect.module.css";

function ImageMirrorEffect({ img, style }) {
  return (
    <div className={styles.wrapper} style={style}>
      <img src={img} className="w-full" alt="" />
      <img src={img} className="w-full" alt="" />
    </div>
  );
}

export default ImageMirrorEffect;
