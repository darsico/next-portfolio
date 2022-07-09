import { useState } from 'react';
import { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialState = {
  projects: [],
  selectedDesignTag: null,

  designProjects: [],
  selectedWebDevTag: null,

  webDevProjects: [],
};

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const getWebDevProjects = (projectsData) => {
    dispatch({
      type: 'FILTER_WEB_DEV_PROJECTS',
      payload: projectsData,
    });
  };
  const getDesignProjects = (projectsData) => {
    dispatch({
      type: 'FILTER_DESIGN_PROJECTS',
      payload: projectsData,
    });
  };

  const getProjects = (projectsData) => {
    dispatch({
      type: 'GET_PROJECTS',
      payload: projectsData,
    });
    setFilteredProjects(projectsData);
  };

  // const webDevTags =
  //   webDevProjects?.length > 0 &&
  //   webDevProjects?.reduce((filtered, project) => {
  //     const filteredDesignTags = project.node.projectCustomFields.designTags;
  //     if (filteredDesignTags !== null) filtered.push(filteredDesignTags);
  //     return filtered;
  //   }, []);
  // const allWebDevTags = [].concat(...webDevTags);

  return (
    <SiteContext.Provider
      value={{
        projects: state.projects,
        selectedWebDevTag: state.selectedWebDevTag,
        webDevProjects: state.webDevProjects,
        designProjects: state.designProjects,
        getProjects,
        getWebDevProjects,
        getDesignProjects,
        filteredProjects,
        setFilteredProjects,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
