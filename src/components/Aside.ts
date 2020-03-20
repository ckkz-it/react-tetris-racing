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

  @media screen and (max-width: 756px) {
    width: 100%;
    margin: 50px 50px 0 50px;

    button,
    div {
      margin-bottom: 10px;
    }
  }
`;

export default Aside;
