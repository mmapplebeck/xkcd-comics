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

const Loader = styled.div`
  text-align: center;
  color: #666;
  font-size: 2rem;
  padding-top: 1rem;
`;

function Comics() {
  const [comics, setComics] = useState([]);
  const isLargerScreen = useMediaQuery({
    query: `(min-width: ${largeScreenSize})`
  });

  useEffect(() => {
    ComicsService.getComics().then(comics => {
      setComics(comics);
    });
  }, []);

  return (
    <>
      {comics.length === 0 && <Loader>Loading&hellip;</Loader>}
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
