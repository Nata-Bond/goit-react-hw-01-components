import React from "react";
import StatisticItem from "./StatisticItem";

import s from "./Statistics.module.css";

const Statistics = ({ items, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      {items.length !== 0 && (
        <ul className={s.statList}>
          {items.map((item) => {
            return (
              <StatisticItem
                key={item.id}
                label={item.label}
                percentage={item.percentage}
                id={item.id}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Statistics;
