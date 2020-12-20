import React from "react";
import classnames from "classnames";

import s from "./FriendListItem.module.css";

const FriendListItem = ({ friends }) => {
  return friends.map((friend) => {
    const statOnline = classnames(
      s.status,
      friend.isOnline ? s.online : s.offline
    );
    return (
      <li key={friend.id} className={s.item}>
        <span className={statOnline}></span>
        <img
          className={s.avatar}
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className={s.name}>{friend.name}</p>
      </li>
    );
  });
};

export default FriendListItem;
