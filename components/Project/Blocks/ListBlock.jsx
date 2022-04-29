const ListBlock = ({ values }) => {
  return <ul dangerouslySetInnerHTML={{ __html: values }}></ul>;
};

export default ListBlock;
