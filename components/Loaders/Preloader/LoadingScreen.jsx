import styled from "styled-components";

const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: #ececec;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LoadingScreen = ({ count }) => {
  return (
    <Screen>
      <p className="text-gray-700 text-9xl tracking-tighter transition-all font-light">{count}%</p>
    </Screen>
  );
};

export default LoadingScreen;
