import tw from "twin.macro";

const StandardButton = ({ text }) => {
  return (
    <>
      <StyledButton href="#form">{text}</StyledButton>
    </>
  );
};

const StyledButton = tw.a`w-[fit-content] py-1 px-4 rounded-full border border-gray-900 hover:bg-black hover:text-[#ececec] `;

export default StandardButton;
