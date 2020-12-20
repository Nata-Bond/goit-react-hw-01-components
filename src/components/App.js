import React from "react";

import user from "./../data/user.json";
import stat from "./../data/statistical-data.json";
import friendList from "./../data/friendList.json";
import transactions from "./../data/transactions.json";

import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        avatar={user.avatar}
        stats={user.stats}
        location={user.location}
      />
      <Statistics title="Upload stats" items={stat} />
      <FriendList friends={friendList} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
