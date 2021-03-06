import styled from 'styled-components';

const StyledDisplay = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  border-radius: 20px;
  color: #999;
  background: #000;
  font-size: 1.1rem;

  @media screen and (max-width: 1200px) {
    padding: 15px;
  }

  @media screen and (max-width: 900px) {
    padding: 10px;
    font-size: 1rem;
  }

  @media screen and (max-width: 756px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 596px) {
    font-size: 1.2rem;
  }
`;

export default StyledDisplay;
