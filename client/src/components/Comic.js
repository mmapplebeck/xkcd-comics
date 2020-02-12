import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { largeScreenSize } from "../media";

const StyledComic = styled.a`
  padding: 1rem;
  min-width: 0;
  max-height: 18rem;
  overflow: hidden;
  border: 3px solid transparent;
  color: black;
  text-decoration: none;

  &:hover {
    border-color: black;
  }
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: ${largeScreenSize}) {
    font-size: 1.25rem;
  }
`;

const Image = styled.img`
  width: 100%;

  ${Title} + & {
    margin-top: 0.5rem;
  }
`;

function Comic({ title, alt, img }) {
  return (
    <StyledComic href={img} target="_blank">
      <Title>{title}</Title>
      <Image src={img} alt={alt} />
    </StyledComic>
  );
}

Comic.propTypes = {
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Comic;
