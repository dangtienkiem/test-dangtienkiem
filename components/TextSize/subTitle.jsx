import React from 'react';
import styled from 'styled-components';

function TextSubTitle({ children }) {
  return (
    <SubTitleStyled className="text__description">{children}</SubTitleStyled>
  );
}

const SubTitleStyled = styled.span`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 0px;

  @media (min-width: 767px) {
    font-size: 24px;
  }
`;
export default TextSubTitle;
