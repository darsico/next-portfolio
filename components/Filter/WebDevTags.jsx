const WebDevTags = ({ webDevProjects, handleWebDevClick }) => {
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

  return (
    <>
      {Object.entries(webDevTagsCounted).map(([key, value], index) => {
        return (
          <button
            key={index}
            onClick={(e) => handleWebDevClick(e)}
            className="active:underline text-xs font-light flex items-start"
          >
            <span className="text-base hover:underline">{key}</span>
            {value}
          </button>
        );
      })}
    </>
  );
};

export default WebDevTags;
