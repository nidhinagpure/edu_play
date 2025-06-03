import { createGlobalStyle } from 'styled-components';
import Navbarr from './../../component/navbar/Navbarr'; // ✅ This import must be at the top
import Headersection from './../../component/headersection/Headersection';

// Global style
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F2F2F2;
  }
`;

function Home() {
  return (
    <>
      <GlobalStyle />
      <Navbarr />
      <div>
         <Headersection/>
      </div>
    </>
  );
}

export default Home;
