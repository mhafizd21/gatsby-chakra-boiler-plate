import { extendTheme } from '@chakra-ui/react';
import buttonTheme from './button-theme';
import containerTheme from './container-theme';

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1400px',
};

const theme = {
  breakpoints,
  // colors: {
  //   brandBlue: {
  //     500: '#1C50D6', // background color
  //     600: '#ff3c00', // hover color
  //     700: '#ff3c00', // active color
  //   },
  // },
  // lineHeights: {
  //   shorter: 1.2,
  //   base: 1.5,
  //   tall: 1.7,
  // },
  components: {
    Container: containerTheme,
    Button: buttonTheme,
  //   Text: {
  //     baseStyle: {
  //       marginBottom: '8px',
  //       fontSize: '20px',
  //       lineHeight: 'tall',
  //       color: 'colors.blue',
  //     },
  //   },
  //   Heading: {
  //     baseStyle: {
  //       lineHeight: 'shorter',
  //       marginBottom: '12px',
  //     },
  //   },
  },
  // fonts: {
  //   body: 'Raleway',
  //   heading: 'Raleway',
  // },
};

export default extendTheme(theme);