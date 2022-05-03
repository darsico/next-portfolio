import React from "react";

const applyStyle = (type) => {
  // apply tailwind styles to headings

  const classNames = {
    h1: `text-4xl`,
    h2: `text-3xl`,
    h3: `text-2xl font-semibold mt-4`,
    h4: `text-xl font-medium `,
    h5: `text-base font-semibold mt-2`,
    h6: `text-base`,
    default: `text-base`,
  };
  return classNames[type] || classNames["default"];
};

const HeadingBlock = ({ level, content }) => {
  const defaultHeadingStyles = "tracking-tighter  ";

  const tag = `h${level}`;

  return (
    <>
      {React.createElement(
        tag,
        {
          className: `${applyStyle(tag)} ${defaultHeadingStyles} `,
        },
        content
      )}
    </>
  );
};

export default HeadingBlock;
