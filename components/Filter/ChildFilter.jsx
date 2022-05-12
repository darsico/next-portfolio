import { useContext } from "react";
import DesignProjectsContext from "../../context/DesignProjectsContext";
import WebDevProjectsContext from "../../context/WebDevProjectContext";
import DesignTags from "./DesignTags";
import WebDevTags from "./WebDevTags";

const ChildFilter = ({ setFilteredProjects, toggle }) => {
  const designContext = useContext(DesignProjectsContext);
  const designProjects = designContext.projects;

  const webDevContext = useContext(WebDevProjectsContext);
  const webDevProjects = webDevContext.projects;

  const handleWebDevClick = (e) => {
    const selectedTag = e.target.innerText;
    const projectsBeingFiltered = webDevProjects.filter((item) => {
      return item.node.projectCustomFields.technologies.includes(selectedTag);
    });
    setFilteredProjects(projectsBeingFiltered);
  };

  const handleDesignClick = (e) => {
    const selectedTag = e.target.innerText;
    const projectsBeingFiltered = designProjects.filter((item) => {
      return item.node.projectCustomFields.designTags.includes(selectedTag);
    });
    setFilteredProjects(projectsBeingFiltered);
  };

  return (
    <div className="flex gap-2 mt-3  flex-wrap">
      {toggle === 1 ? (
        <button onClick={() => setFilteredProjects(webDevProjects)} className="text-base font-light">
          Todos
        </button>
      ) : (
        <button onClick={() => setFilteredProjects(designProjects)} className="text-base font-light">
          Todos
        </button>
      )}
      {toggle === 1 && <WebDevTags handleWebDevClick={handleWebDevClick} />}
      {toggle === 2 && <DesignTags handleDesignClick={handleDesignClick} />}
    </div>
  );
};

export default ChildFilter;
