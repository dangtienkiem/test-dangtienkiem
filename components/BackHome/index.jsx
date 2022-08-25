import { Link, Router } from 'react-router-dom';
import { HeadBackHome } from './Styled';
BackHome.propTypes = {};

function BackHome({ className = '' }) {
  return (
    <HeadBackHome className={className}>
      <img src="./images/back-home.svg" alt="" />
    </HeadBackHome>
  );
}

export default BackHome;
