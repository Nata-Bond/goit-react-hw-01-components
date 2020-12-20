import React from "react";
import rundomColor from "../../rundomColor";

import s from "./Statistics.module.css";

const StatisticItem = ({ items }) => {
  return items.map((item) => {
    return (
      <li
        key={item.id}
        className={s.item}
        style={{ background: rundomColor() }}
      >
        <span className={s.label}>{item.label}</span>
        <span className={s.percentege}>{item.percentage}%</span>
      </li>
    );
  });
};

export default StatisticItem;
