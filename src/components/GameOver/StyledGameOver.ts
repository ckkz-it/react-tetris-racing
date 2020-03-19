import styled from 'styled-components';

const StyledGameOver = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  pointer-events: none;
  white-space: nowrap;
  background: #000000;
  border-radius: 5px;
  opacity: 0.8;
  text-align: center;

  div:first-child {
    font-size: 1.7rem;
    color: #b90000;
  }

  div {
    font-size: 1.5rem;
    color: #cacaca;
  }

  @media screen and (max-width: 1200px) {
    padding: 20px;
  }

  @media screen and (max-width: 900px) {
    padding: 10px;
  }
`;

export default StyledGameOver;
