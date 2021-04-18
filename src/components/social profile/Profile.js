import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default.png";
import styles from './Profile.module.css'


const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={styles.profile}>
    <div>
      <img src={avatar} alt="Аватар пользователя" width="150" />
      <p className={styles.name}>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
    <ul className={styles.stats}>
      <li>
        <span>Followers </span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span>Views </span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li>
        <span>Likes </span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
