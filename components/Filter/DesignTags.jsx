import { useContext, useState } from "react";
import DesignProjectsContext from "../../context/DesignProjectsContext";

const DesignTags = ({ setFilteredProjects }) => {
  const [selected, setSelected] = useState({
    selectedBtn: "designAll",
  });
  const designContext = useContext(DesignProjectsContext);
  const designProjects = designContext.projects;

  const handleDesignClick = (e) => {
    const selectedTag = e.target.innerText;
    const currentId = e.currentTarget.id;
    setSelected({
      ...selected,
      selectedBtn: currentId,
    });
    const projectsBeingFiltered = designProjects.filter((item) => {
      return item.node.projectCustomFields.designTags.includes(selectedTag);
    });
    setFilteredProjects(projectsBeingFiltered);
  };

  const handleAllButtonClick = (e) => {
    const currentId = e.currentTarget.id;
    setSelected({
      ...selected,
      selectedBtn: currentId,
    });
    setFilteredProjects(designProjects);
  };

  return (
    <>
      <button
        onClick={(e) => handleAllButtonClick(e)}
        className={`text-base font-light hover:underline  ${selected.selectedBtn === "designAll" ? "underline" : ""}`}
        id="designAll"
      >
        Todos
      </button>
      {designContext.tags.map((designTag, index) => {
        return (
          <button
            key={index}
            id={index}
            onClick={(e) => handleDesignClick(e)}
            className={`active:underline text-base font-light hover:underline ${
              selected.selectedBtn === index.toString() ? "underline" : ""
            } `}
          >
            {designTag}
          </button>
        );
      })}
    </>
  );
};

export default DesignTags;
