import { cleanAndCapitalize } from '../src/utils/cleanAndCapitalize';

const appReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'GET_PROJECTS':
      return {
        ...state,
        projects: payload,
      };

    case 'FILTER_WEB_DEV_PROJECTS':
      const webDevFiltered = payload.filter((webDevProject) => webDevProject.type === 'Desarrollo Web');
      const webDevWithTags = webDevFiltered.map((project) => ({ ...project, tags: project.technologyIconsCollection.items.map((icon) => cleanAndCapitalize(icon.title)) }));
      return {
        ...state,
        webDevProjects: webDevWithTags,
      };

    case 'FILTER_DESIGN_PROJECTS':
      return {
        ...state,
        designProjects: payload.filter((designProject) => designProject.type === 'Diseño'),
      };

    default:
      return state;
  }
};

export default appReducer;
