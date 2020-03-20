import styled from 'styled-components';

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  width: 15%;

  button,
  div {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 700px) {
    width: 20%;
  }
`;

export default Aside;
