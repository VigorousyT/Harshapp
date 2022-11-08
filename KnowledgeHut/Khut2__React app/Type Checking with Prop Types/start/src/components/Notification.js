import React from "react";
import PropTypes from "prop-types";

const Notification = ({messages}) => (
  <ul>
    {messages.map((m, i) => (
      <li key={i}>{m}</li>
    ))}
  </ul>
);

Notification.propTypes = {
  messages: PropTypes.array
};

export default Notification;
