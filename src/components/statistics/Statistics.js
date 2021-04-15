import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => (
  <section>
    <h2>{title}</h2>

    <ul>
      {stats.map((stat) => (
          <li key={stat.id}>
          <span>{stat.label} </span>
          <span>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;