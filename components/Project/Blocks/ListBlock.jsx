const ListBlock = ({ content }) => { 
  const values = content.map((item) => {

    return `<li class="pb-2">${item.content[0].content[0].value}</li>`;
  }).join('');
  
  return <ul className="list-disc list-block" dangerouslySetInnerHTML={{ __html: values }}></ul>;
};

export default ListBlock;
