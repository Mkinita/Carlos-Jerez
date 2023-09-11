import Document, { Html, Head, Main, NextScript } from 'next/document';
import Header from '@/components/Header'
import Footer from '@/components/Footer';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        {/* <Header/> */}
        <body>
          <Main />
          <NextScript />
          {/* <Footer /> */}
        </body>
      </Html>
    );
  }
}