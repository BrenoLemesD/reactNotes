import styles from "./Car.module.css";

import React from "react";
const car = ({ car }) => {
  return (
    <div className={styles.card}>
      <h1>marca:${car.brand}</h1>
      <h1>modelo:${car.model}</h1>
      <h1>ano:${car.year}</h1>
    </div>
  );
};
export default car;
