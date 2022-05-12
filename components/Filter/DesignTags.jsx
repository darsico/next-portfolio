import { useContext } from "react";
import DesignProjectsContext from "../../context/DesignProjectsContext";

const DesignTags = ({ handleDesignClick }) => {
  const designContext = useContext(DesignProjectsContext);
  return (
    <>
      {designContext.tags.map((designTag, index) => {
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
