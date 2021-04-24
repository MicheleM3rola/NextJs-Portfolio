import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";

import Hero from "../components/Hero";
import Meta from "../components/Meta";

import Projects from "../components/Projects";

import sanityClient from "../sanityClient";

const HomePgae = ({ card, data }) => {
  return (
    <>
      <Meta />
      <Hero />

      <About />
      <Projects card={card} gitRepo={data} />
      <Contact />
    </>
  );
};

export async function getServerSideProps() {
  const card = await sanityClient.fetch(
    `*[_type == "card"]{
      title,
      demo,
      repo,
      mainImage{asset->{_id,url}},
      body,
      tech[]->{title,mainImage{asset->{_id,url}}}
     }
     `
  );
  const res = await fetch(`https://michele-merola.vercel.app/api/github`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { card, data },
  };
}

export default HomePgae;
