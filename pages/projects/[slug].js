import Layout from '../../components/Layout.jsx';
import ProjectInfo from '../../components/Project/ProjectInfo.jsx';
import getDataQuery from '../../lib/request.js';
import { QUERY_PROJECTS } from '../../src/queries/queryProjects.js';

export const getStaticPaths = async () => {
  const response = await getDataQuery(QUERY_PROJECTS);
  const projectsData = response.projectCollection.items;
  const slugs = projectsData.map((project) => project.slug);
  const paths = slugs.map((slug) => ({ params: { slug: slug } }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  const response = await getDataQuery(QUERY_PROJECTS);
  const projectsData = response.projectCollection.items;

  const { params } = context;
  const { slug } = params;
  const project = projectsData.find((project) => project.slug === slug);
  return {
    props: {
      project,
    },
    revalidate: 30,
  };
};

const ProjectPage = ({ project }) => {
  // const blocks = project.node.blocks;
  //console.log(project.projectOverview.json.content)
  const { title, description } = project || {};

  return (
    <Layout title={title} description={description}>
      <ProjectInfo project={project} />
      {/* <section className="mx-auto w-[80%] sm:w-[70%] md:max-w-2xl md:-mt-5 flex flex-col gap-2 py-20 ">
        {blocks
          ? blocks.map((block, index) => {
              return <Block block={block} key={index} />;
            })
          : "Can't find the blocks"}
      </section> */}
    </Layout>
  );
};

export default ProjectPage;
