const ParagraphBlock = ({ content }) => {
  const paragraph = content.map((item, index) => {

    const isBold = item.marks[0] && item.marks[0].type === "bold";

    if (isBold) {
      return <span className="font-bold" key={index}>{item.value}</span>;
    }
    return item.value;
  });

  return <p className="pb-2 text-base leading-5 md:pb-3">{paragraph}</p>;
};

export default ParagraphBlock;
