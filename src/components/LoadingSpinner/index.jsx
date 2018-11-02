import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const LoadingSpinner = styled.i`
  display: block;
  position: absolute; 
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 3px ${props => (props.color ? props.color : "#fff")} solid;
  border-right-color: transparent;
  width: ${props => (props.size ? props.size : "10px")};
  height: ${props => (props.size ? props.size : "10px")};
  animation: ${rotate} 2s linear infinite;

`;

export default LoadingSpinner;
