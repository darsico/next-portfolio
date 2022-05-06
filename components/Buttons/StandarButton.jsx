import tw, { styled } from "twin.macro";

const StandardButton = ({ text, color }) => {
  return (
    <>
      <StyledButton>{text}</StyledButton>
    </>
  );
};

const StyledButton = tw.p`w-[fit-content] py-1 px-4 rounded-full border border-gray-900 hover:bg-black hover:text-[#ececec]`;

export default StandardButton;
