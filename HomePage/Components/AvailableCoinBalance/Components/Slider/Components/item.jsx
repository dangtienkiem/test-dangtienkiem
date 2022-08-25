import styled from 'styled-components';

const Slider = ({ character }) => {
  return (
    <CharacterStyled data-aos="fade-up" data-aos-delay="200">
      <div className="widget">
        <div className="widget__img">
          <img src={character.imgUrl} alt={character.imgUrl} />
        </div>

        <div className="widget__space">
          <h3 className="widget__name">{character.title}</h3>
          <p className="widget__content">{character.content}</p>
          <span>{character.url}</span>
        </div>
      </div>
    </CharacterStyled>
  );
};

const CharacterStyled = styled.div`
  display: flex !important;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;

  p {
    margin: 0;
  }

  .widget {
    transition: ease all 0.5s;
    cursor: pointer;
    background: url('../images/bg-item-gameplay.png') no-repeat;
    background-size: 100% 100%;
    width: 100%;
    min-height: 250px;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 12px 18px rgba(23, 23, 37, 0.04);
    border: 1px solid #f1f1f5;
    border-radius: 4px;

    img {
      width: 100%;
    }

    &__img {
      height: 84px;
      overflow: hidden;
    }

    &__space {
      padding: 15px;

      span {
        color: #0062ff;
        display: block;
        padding-top: 8px;
      }
    }

    &__name {
      text-align: left;
      color: #0062ff;
      font-size: 16px;
      line-height: 24px;
      position: relative;
    }

    &__content {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.005em;
      color: #92929d;
    }
  }
`;

export default Slider;
