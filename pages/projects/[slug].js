import dynamic from 'next/dynamic.js';
import Layout from '../../components/Layout.jsx';
// import ProjectInfo from '../../components/Project/ProjectInfo.jsx';
import getDataQuery from '../../lib/request.js';
import { QUERY_PROJECTS } from '../../src/queries/queryProjects.js';
import Block from '../../components/Project/Block.jsx';
import { QUERY_PROJECT } from '../../src/queries/querySingleProject.js';

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

  const project = projectsData?.find((project) => project.slug === slug);

  const variables = {
    id: project.sys.id,
  };

  const responseProject = await getDataQuery(QUERY_PROJECT, variables);
  const projectData = responseProject.project;

  return {
    props: {
      project: projectData,
    },
    revalidate: 30,
  };
};

const ProjectPage = ({ project }) => {
  const { title, description, content } = project || {};
  const ProjectInfo = dynamic(() => import('../../components/Project/ProjectInfo.jsx'), {
    ssr: false,
  });
  const { json, links } = content || {};

  const assetsOfBlocks = links?.assets.block || [];
  const contentData = json?.content || [];

  const contentDataWithAssets = contentData.map((block) => {
    if (block.nodeType === 'embedded-asset-block') {
      const imageBlockId = block.data.target.sys.id;
      const asset = assetsOfBlocks.find((asset) => asset.sys.id === imageBlockId);
      const { description, url } = asset || {};

      return {
        ...block,
        url,
        description,
      };
    }
    return block;
  });

  return (
    <Layout title={title} description={description}>
      <ProjectInfo project={project} />
      <section className="mx-auto w-[80%] sm:w-[70%] md:max-w-2xl md:-mt-5 flex flex-col gap-2 py-20 ">
        {contentDataWithAssets
          ? contentDataWithAssets.map((block, index) => {
              return <Block block={block} key={index} />;
            })
          : "Can't find the blocks"}
      </section>
    </Layout>
  );
};

export default ProjectPage;
