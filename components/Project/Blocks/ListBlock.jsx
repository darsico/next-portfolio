const ListBlock = ({ values }) => {
  return <ul className="list-disc list-block" dangerouslySetInnerHTML={{ __html: values }}></ul>;
};

export default ListBlock;
