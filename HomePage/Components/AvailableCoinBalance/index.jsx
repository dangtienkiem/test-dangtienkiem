import React from 'react';
import { Button } from 'antd';
import {
  AvailableCoinStyled,
  BoxContentStyled,
  ItemContentStyled,
} from './Styled';
import Description from '../../../components/TextSize/desc';
import Slider from './Components/index';

function GameFeatures() {
  return (
    <BoxContentStyled>
      <div className="container">
        <AvailableCoinStyled>
          <Description>Available Coin balance</Description>

          <h3>340</h3>

          <div className="progress">
            <div className="progress__bar" style={{ width: '35%' }}></div>
          </div>

          <p className="payment">
            You have paid rental fee for $1,200. Pay more $800 to achieve Gold
            Tier.
          </p>

          <Button type="link">
            View tier benefits{' '}
            <img src="./images/icon-arrows-right.png" alt="icon arrows right" />
          </Button>

          <Button type="primary">My Coupons</Button>

          <span className="date">Updated : 02/11/2021</span>
        </AvailableCoinStyled>

        <ItemContentStyled className="mt-100">
          <h2>Petrol</h2>
          <Slider />
        </ItemContentStyled>

        <ItemContentStyled>
          <h2>Rental Rebate</h2>
          <Slider />
        </ItemContentStyled>

        <ItemContentStyled>
          <h2>Food and Beverage</h2>
          <Slider />
        </ItemContentStyled>
      </div>
    </BoxContentStyled>
  );
}
export default GameFeatures;
