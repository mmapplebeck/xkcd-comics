import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { chunk } from "lodash";
import { useMediaQuery } from "react-responsive";

import Comic from "./Comic";
import ComicsService from "../services/ComicsService";
import { largeScreenSize } from "../media";

const ComicsRow = styled.div`
  display: flex;
  justify-content: center;
`;

const Notice = styled.div`
  text-align: center;
  color: #666;
  padding-top: 1rem;
  font-size: 1.5rem;

  @media (min-width: ${largeScreenSize}) {
    font-size: 2rem;
  }
`;

function Comics() {
  const [comics, setComics] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const isLargerScreen = useMediaQuery({
    query: `(min-width: ${largeScreenSize})`
  });

  useEffect(() => {
    ComicsService.getComics()
      .then(comics => {
        setComics(comics);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      {comics.length === 0 && !isLoaded && <Notice>Loading&hellip;</Notice>}
      {comics.length === 0 && isLoaded && <Notice>No comics found.</Notice>}
      {comics.length > 0 &&
        chunk(comics, isLargerScreen ? 4 : 2).map(comicsRow => (
          <ComicsRow key={comicsRow[0].num}>
            {comicsRow.map(({ num, safe_title, alt, img }) => (
              <Comic key={num} title={safe_title} alt={alt} img={img} />
            ))}
          </ComicsRow>
        ))}
    </>
  );
}

export default Comics;
