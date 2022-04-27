import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import LatestWork from "../components/Work/LatestWork";
import Works from "../components/Work/Works";
import Connect from "../components/Connect/Connect.jsx";

import { QUERY_SITE_DATA } from "../data/site";
import { SiteContext } from "../hooks/useSiteContext";
import requestData from "../lib/request";
import Contact from "../components/Contact/Contact";

// export async function getStaticProps() {
//   const { generalSettings } = await requestData(QUERY_SITE_DATA);

//   return {
//     props: {
//       siteData: generalSettings,
//     },
//   };
// }
export default function Home() {
  const [data, setData] = useContext(SiteContext);
  console.log(data);
  const { title, description } = data.generalSettings;

  return (
    <Layout title={title} description={description}>
      <Hero />
      <LatestWork />
      <Works />
      <Connect />
      <Contact />
    </Layout>
  );
}


