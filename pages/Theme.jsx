import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    eggplant: '#171725',
    blue: '#0094FF',
    blueLight: '#74A9FA',
    cyan: '#00FFF0',
    gold: '#FFCB04',
    white: '#ffffff',
    ivory: '#FFF1BA',
    orange: '#FF8C04',
    yellow: '#FFCB04',
    lime: '#EBFF04',
    green: '#91FF04',
    aqua: '#00F0FF',
    aqua1: '#6d8620',
    aqua2: '#20865b',
    gray: '#B5B5BE',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
