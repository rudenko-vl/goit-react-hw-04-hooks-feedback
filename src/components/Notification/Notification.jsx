import React from "react";
import PropTypes from "prop-types";
import { Notif, NotifWrapp } from "./Notification.styled";

function Notification({ message }) {
  return (
    <NotifWrapp>
      <Notif>{message}</Notif>
    </NotifWrapp>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
