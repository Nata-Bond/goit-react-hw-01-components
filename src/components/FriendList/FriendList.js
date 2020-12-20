import React from "react";
import FriendListItem from "./FriendListItem/FriendListItem";

import s from "./FriendListItem/FriendListItem.module.css";

const FriendList = ({ friends }) => {
  if (friends.length === 0) {
    return null;
  }

  return (
    <ul className={s.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendList;
