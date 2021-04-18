import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../social profile/default.png";
import styles from './Friends.module.css'

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        <span className={friend.isOnline ? styles.statusOnline : styles.statusOffline}>{friend.isOnline}</span>
        
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
