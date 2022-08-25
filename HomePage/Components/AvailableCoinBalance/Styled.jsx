import styled from 'styled-components';

export const AvailableCoinStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  background-image: url('../images/bg-start-available.png');
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: cover;
  box-shadow: 1px 2px 24px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 100%;
  height: auto;
  padding: 24px;
  transform: translateY(-41%);

  h3 {
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.5px;
    color: #171725;
  }

  .text__desc {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .progress {
    margin-bottom: 34px;
    width: 100%;
    height: 5px;
    overflow: hidden;
    background: #e5e5e5;
    border-radius: 6px;

    &__bar {
      position: relative;
      float: left;
      min-width: 1%;
      height: 100%;
      background: cornflowerblue;
    }
  }

  .payment {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.005em;
    color: #92929d;
    margin-bottom: 16px;
  }

  button {
    padding: 0;
    height: auto;
    line-height: 24px;

    &.ant-btn-primary {
      background: #171725;
      border: none;
      border-radius: 4px;
      padding: 18px;
      font-size: 18px;
      margin-bottom: 16px;
      transition: 0.5s ease-in-out;

      &:hover {
        background-color: #2e2e6a;
        transition: 0.5s ease-in-out;
      }
    }

    &.ant-btn-link {
      text-align: left;
      font-size: 16px;
      margin-bottom: 24px;

      img {
        max-width: 12px;
      }
    }
  }

  .date {
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.5px;
    color: #b5b5be;
  }
`;

export const BoxContentStyled = styled.div`
  width: 100vw;
  margin-inline-start: 50%;
  transform: translateX(-50%);
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
`;

export const ItemContentStyled = styled.div`
  &.mt-100 {
    margin-top: -100px;
  }
`;
