import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import LatestWork from "../components/Work/LatestWork";
import Works from "../components/Work/Works";
import Connect from "../components/Connect/Connect.jsx";
import Contact from "../components/Contact/Contact";

import { SiteContext } from "../context/SiteContext";

import requestData from "../lib/request";
import { QUERY_PROJECTS } from "../src/queries/queryProjects";


export const getStaticProps = async () => {
  const { projects } = await requestData(QUERY_PROJECTS);
  const projectsData = projects.edges;

  return {
    props: {
      projects: projectsData,
    },
    revalidate: 30,
  };
};

export default function Home({ projects }) {
  const [data, setData] = useContext(SiteContext);

  const { title, description } = data.generalSettings;
  const latestProjectData = projects[0].node;

  const pastProjectData = projects.filter((project, index) => index !== 0);

  return (
    <>
      <Layout title={title} description={description}>
        <Hero />
        <LatestWork latestProjectData={latestProjectData} />
        <Works pastProjectData={pastProjectData} />
        <Connect />
        <Contact />
      </Layout>
    </>
  );
}
