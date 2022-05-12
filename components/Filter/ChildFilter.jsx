import DesignTags from "./DesignTags";
import WebDevTags from "./WebDevTags";

const ChildFilter = ({ setFilteredProjects, toggle }) => {
  return (
    <div className="flex gap-2 mt-3  flex-wrap">
      {toggle === 1 && <WebDevTags setFilteredProjects={setFilteredProjects} />}
      {toggle === 2 && <DesignTags setFilteredProjects={setFilteredProjects} />}
    </div>
  );
};

export default ChildFilter;
