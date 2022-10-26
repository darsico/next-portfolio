const StandardButton = ({ text, color }) => {
  return (
    <p className="w-fit py-1 px-4 rounded-full border border-gray-900 hover:bg-black hover:text-[#ececec] transition-all">
      {text}
    </p>
  );
};

export default StandardButton;
