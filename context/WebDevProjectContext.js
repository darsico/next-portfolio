import { createContext, useState } from "react";

const WebDevProjectsContext = createContext();

const WebDevProjectsProvider = ({ children }) => {
  const [webDevData, setWebDevData] = useState([]);

  const webDevProjects = webDevData.filter((item) => {
    const { categories } = item.node;
    const category = categories.edges[0].node.name;
    if (category === "Desarrollo Web" || category === "Web Development") return item.node;
  });

  const webDevTags = webDevProjects.reduce((filtered, project) => {
    const filteredWebDevTags = project.node.projectCustomFields.technologies;
    if (filteredWebDevTags !== null) filtered.push(filteredWebDevTags);
    return filtered;
  }, []);

  const allWebDevTags = [].concat(...webDevTags);

  let webDevTagsCounted = {};

  allWebDevTags.map((webDevTag) => {
    if (webDevTag !== "" && webDevTag !== null) webDevTagsCounted[webDevTag] = (webDevTagsCounted[webDevTag] || 0) + 1;
  });

  const webDevContext = {
    data: webDevData,
    tags: webDevTagsCounted,
    projects: webDevProjects,
    feedWebDevData: (data) => {
      setWebDevData([...data]);
    },
  };

  return <WebDevProjectsContext.Provider value={webDevContext}>{children}</WebDevProjectsContext.Provider>;
};

export { WebDevProjectsProvider };
export default WebDevProjectsContext;
