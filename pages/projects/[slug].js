import Layout from "../../components/Layout.jsx";
import Block from "../../components/Project/Block.jsx";
import ProjectInfo from "../../components/Project/ProjectInfo.jsx";

import requestData from "../../lib/request.js";
import { QUERY_PROJECTS } from "../../src/queries/queryProjects.js";

export const getStaticPaths = async () => {
  const { projects } = await requestData(QUERY_PROJECTS);
  const projectsData = projects.edges;
  const slugs = projectsData.map((project) => project.node.slug);
  const paths = slugs.map((slug) => ({ params: { slug: slug } }));
  return {
    paths,
    fallback: "blocking",
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

const ProjectPage = ({ project }) => {
  const blocks = project.node.blocks;
  const { title, projectCustomFields } = project.node;
  const { description } = projectCustomFields;
  return (
    <Layout title={title} description={description}>
      <ProjectInfo project={project} />
      <section className="mx-auto w-[80%] sm:w-[70%] md:max-w-2xl md:-mt-5 flex flex-col gap-2 py-20 ">
        {blocks
          ? blocks.map((block, index) => {
              return <Block block={block} key={index} />;
            })
          : "Can't find the blocks"}
      </section>
    </Layout>
  );
};

export default ProjectPage;
