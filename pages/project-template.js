import ProjectInfo from "../components/Project/ProjectInfo.jsx";
import Layout from "../components/Layout.jsx";
import requestData from "../lib/request";
import { QUERY_PROJECTS } from "../src/queries/queryProjects.js";

export const getStaticPaths = async () => {
  const { projects } = await requestData(QUERY_PROJECTS);
  const projectsData = projects.edges;
  const slugs = projectsData.map((project) => project.node.slug);
  const paths = slugs.map((slug) => ({ params: { slug: slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { projects } = await requestData(QUERY_PROJECTS);
  const projectsData = projects.edges;

  const { params } = context;
  const { slug } = params;

  const project = projectsData.find((project) => project.node.slug === slug);
  return {
    props: {
      project,
    },
    revalidate: 1,
  };
};

const ProjectIndividual = ({ project }) => {
  console.log(project);
  return (
    <Layout>
      <ProjectInfo />
    </Layout>
  );
};

export default ProjectIndividual;
