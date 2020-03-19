import styled from 'styled-components';

const StyledGameOver = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  pointer-events: none;
  white-space: nowrap;
  font-size: 2rem;
  background: #000000;
  border-radius: 5px;
  color: #b90000;
  opacity: 0.8;
`;

export default StyledGameOver;
