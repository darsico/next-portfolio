const DesignTags = ({ designProjects, handleDesignClick }) => {
  const designTags = designProjects.reduce((filtered, project) => {
    const filteredDesignTags = project.node.projectCustomFields.designTags;
    if (filteredDesignTags !== null) filtered.push(filteredDesignTags);
    return filtered;
  }, []);
  const allDesignTags = [].concat(...designTags);

  return (
    <>
      {allDesignTags.map((designTag, index) => {
        return (
          <button
            key={index}
            onClick={(e) => handleDesignClick(e)}
            className="active:underline text-base font-light hover:underline"
          >
            {designTag}
          </button>
        );
      })}
    </>
  );
};

export default DesignTags;
