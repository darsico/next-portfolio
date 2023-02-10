import React from 'react';

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
  return classNames[type] || classNames['default'];
};

const HeadingBlock = ({ content: contentItemArray, type }) => {
  const { value } = contentItemArray[0];
  const level = type.split('-')[1];

  const defaultHeadingStyles = 'tracking-tighter pb-2 md:pb-3';

  const tag = `h${level}`;

  return (
    <>
      {React.createElement(
        tag,
        {
          className: `${applyStyle(tag)} ${defaultHeadingStyles} `,
        },
        value
      )}
    </>
  );
};

export default HeadingBlock;
