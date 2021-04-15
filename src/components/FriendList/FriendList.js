import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../social profile/default.png";

const FriendList = ({ friends }) => (
  <ul>
    {friends.map((friend) => (
      <li key={friend.id}>
        <span>{friend.isOnline}</span>
        {/* friend.isOnline ? styles.statusOnline : styles.statusOffline */}
        <img src={friend.avatar} alt="" width="48" />
        <p>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.defaultProps = {
  avatar: defaultImage,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
