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
`;

export default StyledButton;
