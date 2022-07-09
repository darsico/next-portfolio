import { createContext, useState } from 'react';

const DesignProjectsContext = createContext();

const DesignProjectsProvider = ({ children }) => {
  const [designData, setDesignData] = useState([]);

  const designProjects = designData?.filter((item) => {
    const { type } = item;
    if (type === 'Diseño' || type === 'Design') return item;
  });

  const designTags = designProjects.reduce((filtered, project) => {
    const filteredDesignTags = project.node.projectCustomFields.designTags;
    if (filteredDesignTags !== null) filtered.push(filteredDesignTags);
    return filtered;
  }, []);
  const allDesignTags = [].concat(...designTags);

  const designContext = {
    data: designData,
    tags: allDesignTags,
    projects: designProjects,
    feedDesignData: (data) => {
      setDesignData([...data]);
    },
  };

  return <DesignProjectsContext.Provider value={designContext}>{children}</DesignProjectsContext.Provider>;
};

export { DesignProjectsProvider };
export default DesignProjectsContext;
