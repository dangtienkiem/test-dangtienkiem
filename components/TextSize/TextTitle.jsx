import React from 'react';
import styled from 'styled-components';

function TitleStep({ nameTitle = 'Roadmap' }) {
  return (
    <TitleStyle className="title__page">
      <h2>{nameTitle}</h2>
    </TitleStyle>
  );
}

const TitleStyle = styled.div`
  h2 {
    font-size: 64px;
    line-height: 79.47px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 30px;
    text-transform: capitalize;

    @media (max-width: 768px) {
      font-size: 50px;
      line-height: unset;
      margin-bottom: 10px;
    }

    @media (max-width: 500px) {
      font-size: 25px;
    }
  }
`;
export default TitleStep;
