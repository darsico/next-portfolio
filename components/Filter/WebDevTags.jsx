import { useContext } from "react";
import WebDevProjectsContext from "../../context/WebDevProjectContext";

const WebDevTags = ({ handleWebDevClick }) => {
  const webDevContext = useContext(WebDevProjectsContext);

  return (
    <>
      {webDevContext.tags &&
        Object.entries(webDevContext.tags).map(([key, value], index) => {
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
