import tw from "twin.macro";

const StandardButton = ({ text, color }) => {
  return (
    <p className="w-fit py-1 px-4 rounded-full border border-gray-900 hover:bg-black hover:text-[#ececec]">{text}</p>
  );
};

const StyledButton = tw.p`w-[fit-content] py-1 px-4 rounded-full border border-gray-900 hover:bg-black hover:text-[#ececec]`;

export default StandardButton;
