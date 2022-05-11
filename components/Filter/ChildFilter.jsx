import DesignTags from "./DesignTags";
import WebDevTags from "./WebDevTags";

const ChildFilter = ({ setFilteredProjects, toggle, webDevProjects, designProjects }) => {
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
      {toggle === 1 && <WebDevTags handleWebDevClick={handleWebDevClick} webDevProjects={webDevProjects} />}
      {toggle === 2 && <DesignTags handleDesignClick={handleDesignClick} designProjects={designProjects} />}
    </div>
  );
};

export default ChildFilter;
