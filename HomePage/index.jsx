import React from 'react';

import SilverTier from './Components/SilverTier';
import AvailableCoinBalance from './Components/AvailableCoinBalance';

export default function Index() {
  return (
    <div className="container">
      <SilverTier />
      <AvailableCoinBalance />
    </div>
  );
}
