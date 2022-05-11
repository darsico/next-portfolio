import { useState } from "react";
import Section from "../Section";
import ChildFilter from "./ChildFilter";

const Filter = ({ projects, setFilteredProjects }) => {
  const [toggle, setToggle] = useState(1);
  const toggleItem = (index) => {
    setToggle(index);
  };
  const toggleStyle = (index) => `${toggle === index ? "opacity-100" : "opacity-40"} font-bold`;

  return (
    <Section className="flex flex-col md:pb-10 md:pt-0">
      <div className="flex gap-3 text-xl">
        <button onClick={() => toggleItem(1)} className={toggleStyle(1)}>
          Desarrollo Web
        </button>
        <button onClick={() => toggleItem(2)} className={toggleStyle(2)}>
          Diseño
        </button>
      </div>

      <ChildFilter projects={projects} setFilteredProjects={setFilteredProjects} />
    </Section>
  );
};

export default Filter;
