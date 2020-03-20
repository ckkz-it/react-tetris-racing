import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 20px;
  min-height: 30px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  background-color: #2d2626;
  color: #fff;

  &[disabled] {
    cursor: default;
    color: #868485;
  }

  @media screen and (max-width: 1200px) {
    padding: 15px;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 900px) {
    padding: 10px;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 756px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 596px) {
    font-size: 1.1rem;
  }
`;

export default StyledButton;
