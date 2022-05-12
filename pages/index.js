import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import LatestWork from "../components/Work/LatestWork";
import Works from "../components/Work/Works";
import Connect from "../components/Connect/Connect.jsx";
import Contact from "../components/Contact/Contact";

import { SiteContext } from "../context/SiteContext";

import requestData from "../lib/request";
import { QUERY_PROJECTS } from "../src/queries/queryProjects";
import Filter from "../components/Filter/Filter";
import DesignProjectsContext from "../context/DesignProjectsContext";
import WebDevProjectsContext from "../context/WebDevProjectContext";

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
  const [data] = useContext(SiteContext);
  const { title, description } = data.generalSettings;
  const latestProjectData = projects[0].node;
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const designProjectsContext = useRef(useContext(DesignProjectsContext));
  const webDevProjectsContext = useRef(useContext(WebDevProjectsContext));

  const dataProjects = useRef(projects);

  useEffect(() => {
    designProjectsContext.current.feedDesignData(dataProjects.current);

    webDevProjectsContext.current.feedWebDevData(dataProjects.current);
  }, []);

  // TODO context for webDevProjects and designProjects
  // Todo filtered projects Context
  return (
    <>
      <Layout title={title} description={description}>
        <Hero />
        <LatestWork latestProjectData={latestProjectData} />
        <Filter projects={projects} setFilteredProjects={setFilteredProjects} />
        <Works filteredProjects={filteredProjects} />
        <Connect />
        <Contact />
      </Layout>
    </>
  );
}
