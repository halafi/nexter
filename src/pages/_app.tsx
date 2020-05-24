/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import theme from '../records/Theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Normalize />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
