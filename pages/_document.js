import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,500;1,600&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="favicon.png" />
          {/*Facebook Card*/}

          <meta
            property="og:url"
            content="https://michele-merola.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Michele Portfolio" />
          <meta
            property="og:description"
            content="Portfolio Projects ShowCase for Front-End Web Development"
          />
          <meta property="og:image" content="/newPortfolio.jpg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />

          {/* twitter Card*/}
          <meta name="twitter:card" content="summary_large_image" />

          <meta name="twitter:site" content="@MicheleMerola15" />
          <meta name="twitter:title" content="Michele Portfolio" />
          <meta
            name="twitter:description"
            content="Portfolio Projects ShowCase for Front-End Web Development"
          />
          <meta
            name="twitter:image"
            content={
              `https://michele-merola.vercel.app/` + `/TwitterCardImg.jpg`
            }
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
