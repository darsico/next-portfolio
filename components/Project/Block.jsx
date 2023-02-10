import HeadingBlock from './Blocks/HeadingBlock';
import ImageBlock from './Blocks/ImageBlock';
import ListBlock from './Blocks/ListBlock';
import ParagraphBlock from './Blocks/ParagraphBlock';

const Block = ({ block }) => {
  const { content, nodeType } = block;

  switch (nodeType) {
    case 'heading-1' || 'heading-2' || 'heading-3' || 'heading-4' || 'heading-5' || 'heading-6':
      return <HeadingBlock content={content} type={nodeType} />;

    case 'paragraph':
      return <ParagraphBlock content={content} />;

    case 'embedded-asset-block':
      return <ImageBlock block={block} />;

    case "ordered-list":
      return <ListBlock content={content} />;
    case "hr": 
      return <hr className="my-4 border-t-2 border-gray-300" />;
    default:
      return null;
  }
};

export default Block;
