import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import '../public/css/index.scss';

import Theme from './Theme';
import type { AppProps } from 'next/app';

function MyApp(this: any, { Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
