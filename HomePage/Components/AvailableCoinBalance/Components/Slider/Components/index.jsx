import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Character from './item';

const characterList = [
  {
    imgUrl: './images/banner-1.png',
    title: '15 Coins',
    content: '50% discount for every $100 top-up on your Shell Petrol Card.',
    url: '',
  },
  {
    imgUrl: './images/banner-2.png',
    title: '1,000 Coins',
    content: '70% discount top-up on your Shell Petrol Card',
    url: 'Insufficient coins',
  },
  {
    imgUrl: './images/banner-2.png',
    title: '1,000 Coins',
    content: '70% discount top-up on your Shell Petrol Card',
    url: 'Insufficient coins',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      arrows: false,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

function Characters() {
  return (
    <CharacterListStyled>
      <Slider {...settings}>
        {characterList.map((character, index) => (
          <Character character={character} index={index} key={index} />
        ))}
      </Slider>
    </CharacterListStyled>
  );
}

export const CharacterListStyled = styled.div`
  padding-bottom: 30px;

  @media (min-width: 767px) {
    padding-bottom: 90px;
  }

  .slick-track {
    display: flex;

    .slick-slide {
      margin-right: 10px;
      padding-bottom: 20px;
    }
  }

  .slick-next,
  .slick-prev {
    display: none !important;
  }
`;
export default Characters;
