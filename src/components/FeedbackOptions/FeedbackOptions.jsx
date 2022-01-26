import React from "react";
import PropTypes from "prop-types";
import { BtnItem, Btn } from "./FeedbackOptions.styled";

function FeedbackOptions({ options, onHandleFeedback }) {
  return options.map((option) => (
    <BtnItem key={option}>
      <Btn type="button" onClick={() => onHandleFeedback(option)}>
        {option}
      </Btn>
    </BtnItem>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onHandleFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
