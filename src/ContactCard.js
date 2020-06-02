import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactCard extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <ul>
          <li>Mobile Number: {this.props.mobileNum}</li>
          <li>Office Number : {this.props.workNum}</li>
          <li>Email: {this.props.email}</li>
        </ul>
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  mobileNum: PropTypes.string.isRequired,
  workNum: PropTypes.string,
  email: PropTypes.string.isRequired,
};

export default ContactCard;