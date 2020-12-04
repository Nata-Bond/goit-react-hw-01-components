import React from "react";

import user from "./../data/user.json";

import Profile from "./Profile/Profile";

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
    </>
  );
};

export default App;
