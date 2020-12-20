import React from "react";

import s from "./transactions.module.css";

const TransactionHistory = ({ items }) => {
  if (items.length === 0) return null;
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          //   let trStyle;
          //   if (index % 2) {
          //     trStyle = s.tdGray;
          //   } else {
          //     trStyle = s.tdWhite;
          //   }
          let trStyle = index % 2 ? s.tdGray : s.tdWhite;
          return (
            <tr className={trStyle} key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
