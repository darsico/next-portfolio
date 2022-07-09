const DesignTags = ({ designTags }) => {
  return (
    <div className="flex text-sm opacity-75 text-gray-700 flex-wrap">
      {designTags.map((designTag, index) => (
        <p key={index} className="rounded-full py-1 px-2 border-[1px] border-gray-300 scale-90">
          {designTag}
        </p>
      ))}
    </div>
  );
};

export default DesignTags;
