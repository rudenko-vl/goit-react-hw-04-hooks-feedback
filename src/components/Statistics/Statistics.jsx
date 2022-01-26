import React from "react";
import PropTypes from "prop-types";
import {
  List,
  GoodItem,
  NeutralItem,
  BadItem,
  Item,
} from "./Statistics.styled";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <List>
      <GoodItem>
        Good:<span>{good}</span>
      </GoodItem>
      <NeutralItem>
        Neutral:<span>{neutral}</span>
      </NeutralItem>
      <BadItem>
        Bad:<span>{bad}</span>
      </BadItem>
      <Item>
        Total:<span>{total}</span>
      </Item>
      <Item>
        Positive feedback:<span>{positivePercentage}%</span>
      </Item>
    </List>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
