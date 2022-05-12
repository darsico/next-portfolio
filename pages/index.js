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

  const initialRenderWebDevProjects = projects.filter((item) => {
    const { categories } = item.node;
    const category = categories.edges[0].node.name;
    if (category === "Desarrollo Web" || category === "Web Development") return item.node;
  });
  const [filteredProjects, setFilteredProjects] = useState(initialRenderWebDevProjects);

  const designProjectsContext = useRef(useContext(DesignProjectsContext));
  const webDevProjectsContext = useRef(useContext(WebDevProjectsContext));

  const dataProjects = useRef(projects);

  useEffect(() => {
    designProjectsContext.current.feedDesignData(dataProjects.current);

    webDevProjectsContext.current.feedWebDevData(dataProjects.current);
  }, []);

  return (
    <>
      <Layout>
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
