const ChildFilter = ({ setFilteredProjects, projects }) => {
  const showAllTags = () => {
    setFilteredProjects(projects);
  };

  const handleTagClick = (e) => {
    const selectedTag = e.target.innerText;
    const projectsBeingFiltered = projects.filter((item) =>
      item.node.projectCustomFields.technologies.includes(selectedTag)
    );
    setFilteredProjects(projectsBeingFiltered);
  };

  const differentProjectsTags = projects.map((project) => {
    const projectTechnologies = project.node.projectCustomFields.technologies;
    return projectTechnologies;
  });
  const allProjectTags = [].concat(...differentProjectsTags);
  let tagsCount = {};
  allProjectTags.forEach((element) => {
    tagsCount[element] = (tagsCount[element] || 0) + 1;
  });

  return (
    <div className="flex gap-2 mt-3  flex-wrap">
      <button onClick={showAllTags} className="text-base font-light">
        Todos
      </button>
      {Object.entries(tagsCount).map(([key, value], index) => {
        console.log(key);
        return (
          <button
            key={index}
            onClick={(e) => handleTagClick(e)}
            className="active:underline text-xs font-light flex items-start"
          >
            <span className="text-base hover:underline">{key}</span>
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default ChildFilter;
