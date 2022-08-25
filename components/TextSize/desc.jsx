import React from 'react';
import styled from 'styled-components';

function TextDescription({ children }) {
  return (
    <TextDescriptionStyled className="text__desc">
      {children}
    </TextDescriptionStyled>
  );
}

const TextDescriptionStyled = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.005em;
`;
export default TextDescription;
