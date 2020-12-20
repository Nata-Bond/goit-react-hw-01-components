import React from "react";
import StatisticItem from "./StatisticItem";

import s from "./Statistics.module.css";

const Statistics = ({ items, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      {items.length === 0 ? null : (
        <ul className={s.statList}>
          <StatisticItem items={items} />
        </ul>
      )}
    </section>
  );
};

export default Statistics;
