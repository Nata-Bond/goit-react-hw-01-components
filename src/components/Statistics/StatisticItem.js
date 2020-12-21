import React from "react";
import rundomColor from "../../rundomColor";

import s from "./Statistics.module.css";

const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={s.item} style={{ background: rundomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentege}>{percentage}%</span>
    </li>
  );
};

export default StatisticItem;
