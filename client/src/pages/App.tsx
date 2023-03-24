import React, { useState, useEffect } from "react";

import {
  buttonContainer,
  mainPageButton,
  mainPageButtonHover,
  mainTitle
} from "../styles/exports";

import { navToOCR } from "../functions/navigation/navToOCR";


const App = () => {
  const [isHoverVoteButton, setIsHoverVoteButton] = useState(false);
  const [isHoverInfoButton, setIsHoverInfoButton] = useState(false);
  const [voteButtonStyle, setVoteButtonStyle] = useState({});
  const [infoButtonStyle, setInfoButtonStyle] = useState({});

  useEffect(() => {
    if (isHoverVoteButton) {
      setVoteButtonStyle(mainPageButtonHover);
    } else {
      setVoteButtonStyle(mainPageButton);
    }
  }, [isHoverVoteButton]);

  useEffect(() => {
    if (isHoverInfoButton) {
      setInfoButtonStyle(mainPageButtonHover);
    } else {
      setInfoButtonStyle(mainPageButton);
    }
  }, [isHoverInfoButton]);

  return (
    <div>
      <div className="main-page-title">
        <h1 style={mainTitle}>ChainVote - 국가 표준 블록체인 투표 시스템</h1>
      </div>
      <div style={buttonContainer} className="button-container">
        <button
          style={voteButtonStyle}
          onMouseEnter={() => {
            setIsHoverVoteButton(true);
          }}
          className="main-page-nav-button"
          onMouseLeave={() => {
            setIsHoverVoteButton(false);
          }}
          onClick={navToOCR}
        >
          투표하러 가기
        </button>
        <button
          className="main-page-nav-button"
          style={infoButtonStyle}
          onMouseEnter={() => {
            setIsHoverInfoButton(true);
          }}
          onMouseLeave={() => {
            setIsHoverInfoButton(false);
          }}
        >
          작동 원리 알아보기
        </button>
      </div>
    </div>
  );
};

export default App;
