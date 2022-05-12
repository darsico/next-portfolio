import { useContext, useState } from "react";
import WebDevProjectsContext from "../../context/WebDevProjectContext";

const WebDevTags = ({ setFilteredProjects }) => {
  const [selected, setSelected] = useState({
    selectedBtn: "devWebAll",
  });

  const webDevContext = useContext(WebDevProjectsContext);
  const webDevProjects = webDevContext.projects;

  const handleWebDevClick = (e) => {
    const selectedTag = e.target.innerText;
    const currentId = e.currentTarget.id;
    setSelected({
      ...selected,
      selectedBtn: currentId,
    });
    const projectsBeingFiltered = webDevProjects.filter((item) => {
      return item.node.projectCustomFields.technologies.includes(selectedTag);
    });
    setFilteredProjects(projectsBeingFiltered);
  };

  const handleAllButtonClick = (e) => {
    const currentId = e.currentTarget.id;
    setSelected({
      ...selected,
      selectedBtn: currentId,
    });
    setFilteredProjects(webDevProjects);
  };
  return (
    <>
      <button
        id="devWebAll"
        onClick={(e) => handleAllButtonClick(e)}
        className={`text-base font-light hover:underline ${selected.selectedBtn === "devWebAll" ? "underline" : ""}`}
      >
        Todos
      </button>
      {webDevContext.tags &&
        Object.entries(webDevContext.tags).map(([key, value], index) => {
          return (
            <button
              key={index}
              id={index}
              onClick={(e) => handleWebDevClick(e)}
              className={`active:underline text-xs font-light flex items-start `}
            >
              <span
                className={`text-base hover:underline ${selected.selectedBtn === index.toString() ? "underline" : ""} `}
              >
                {key}
              </span>
              {value}
            </button>
          );
        })}
    </>
  );
};

export default WebDevTags;
