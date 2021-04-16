import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default.png";

const Profile = ({ avatar, name, tag, location, stats}) => (
  <div>
    <div>
      <img src={avatar} alt="Аватар пользователя" width="150" />
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
    <ul>
      <li>
        <span>Followers </span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>Views </span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>Likes </span>
        <span>{stats.likes}</span>
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
