import React from 'react';
import styled from 'styled-components';

function TitleStep({ nameTitle = 'Roadmap' }) {
  return (
    <TitleStyle className="title__page">
      <h1>{nameTitle}</h1>
    </TitleStyle>
  );
}

const TitleStyle = styled.div`
  h1 {
    margin-bottom: 0;
    text-align: left;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: ${(props) => props.theme.colors.white};
  }
`;
export default TitleStep;
