import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      {/*Facebook Card*/}

      <meta property="og:url" content="https://michele-merola.vercel.app/" />
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
      <meta name="twitter:creator" content="Michele Merola" />
      <meta name="twitter:title" content="Michele Portfolio" />
      <meta
        name="twitter:description"
        content="Portfolio Projects ShowCase for Front-End Web Development"
      />
      <meta name="twitter:image" content="/newPortfolio.jpg" />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Michele Portfolio",
  keywords: "Portfolio,web development,Front-End,programming,code",
  description: "",
};

export default Meta;
