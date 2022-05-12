import { createContext, useState } from "react";

const DesignProjectsContext = createContext();

const DesignProjectsProvider = ({ children }) => {
  const [designData, setDesignData] = useState([]);

  const designProjects = designData.filter((item) => {
    const { categories } = item.node;
    const category = categories.edges[0].node.name;
    if (category === "Diseño" || category === "Design") return item.node;
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
