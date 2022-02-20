import React, { useState, useEffect } from "react";
import styled from "styled-components";
import arrowTop from "../assets/arrow-top.png";

const ScrollToTop = () => {
  const [scrollState, setScrollState] = useState(false);

  window.addEventListener("scroll", function () {
    this.window.scrollY > 150 ? setScrollState(true) : setScrollState(false);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <ToTop scrollState={scrollState} onClick={() => scrollToTop()}>
      <img src={arrowTop} alt="scroll icon" />
    </ToTop>
  );
};

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10;
  cursor: pointer;
  img {
    height: 2.5rem;
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    img {
      height: 2rem;
    }
  }
`;

export default ScrollToTop;
