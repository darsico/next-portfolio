import HeadingBlock from "./Blocks/HeadingBlock";
import ImageBlock from "./Blocks/ImageBlock";
import ListBlock from "./Blocks/ListBlock";
import ParagraphBlock from "./Blocks/ParagraphBlock";

const Block = ({ block }) => {
  const { name, attributes, originalContent } = block;
  switch (name) {
    case "core/heading":
      return <HeadingBlock {...attributes} />;

    case "core/paragraph":
      return <ParagraphBlock {...attributes} />;

    case "core/image":
      return <ImageBlock {...attributes} />;

    case "core/list":
      return <ListBlock {...attributes} />;

    default:
      return null;
  }
};

export default Block;
