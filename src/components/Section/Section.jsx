import React from "react";
import PropTypes from "prop-types";
import { Container } from "./Section.styled";

function Section({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
