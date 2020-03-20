import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 50px;

  @media screen and (max-width: 756px) {
    padding-top: 70px;
  }

  @media screen and (max-width: 596px) {
    padding-top: 90px;
  }
`;

export default Wrapper;
