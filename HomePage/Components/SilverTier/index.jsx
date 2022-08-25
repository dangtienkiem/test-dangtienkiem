import React, { useState } from 'react';
import 'antd/dist/antd.css';
import TextTitle from './components/TextTitle';
import Description from '../../../components/TextSize/desc';

import BackHome from '../../../components/BackHome';

import { BannerStyled } from './styled';

export default function Banner() {
  return (
    <BannerStyled>
      <BackHome />
      <TextTitle nameTitle="Silver Tier" />
      <Description>
        In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
        exclusive rewards.
      </Description>
    </BannerStyled>
  );
}
