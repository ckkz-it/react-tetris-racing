import styled from 'styled-components';

export default styled.div`
  color: #cacaca;
  font-size: 1.5rem;

  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 756px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 596px) {
    font-size: 0.6rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.4rem;
  }
`;
