export const SIZES = {
  DESKTOP: 1220,
  BIG_TABLET: 1112,
  TABLET: 768,
  BIG_MOBILE: 600, // or 568
  MIDDLE_MOBILE: 414,
  SMALL_MOBILE: 360,
};

const theme = {
  colors: {
    primary: '#0070f3',
    text: '#000000',
  },
};

export default theme;

export type Theme = typeof theme;
