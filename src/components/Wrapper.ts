import styled from 'styled-components';

import bgImage from '../assets/img/bg.jpg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 50px;
  background-image: url(${bgImage});
  background-size: cover;
`;

export default Wrapper;
