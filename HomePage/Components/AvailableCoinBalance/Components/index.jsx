import React, { useContext, useRef, useEffect } from 'react';
import Character from './Slider/Components';
import { GameFeaturesStyled } from './Styled';

function GameFeatures() {
  return (
    <GameFeaturesStyled>
      <Character />
    </GameFeaturesStyled>
  );
}
export default GameFeatures;
