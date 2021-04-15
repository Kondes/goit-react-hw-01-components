import React from "react";
import Profile from "./components/social profile/Profile";
import user from "./components/social profile/user.json";
import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistics/statistical-data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from './components/FriendList/friends.json'

const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
