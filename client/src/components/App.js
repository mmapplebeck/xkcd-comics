import React from "react";
import styled from "styled-components";

import Comics from "./Comics";
import { largeScreenSize } from "../media";

const StyledApp = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
  font-family: "Sulphur Point";
`;

const Header = styled.h1`
  text-align: center;
  font-weight: normal;

  @media (min-width: ${largeScreenSize}) {
    font-size: 3rem;
  }
`;

function App() {
  return (
    <StyledApp>
      <Header>
        The <strong>latest</strong> comics
      </Header>
      <Comics />
    </StyledApp>
  );
}

export default App;
