import { createGlobalStyle } from 'styled-components';
import Navbarr from './../../component/navbar/Navbarr'; // ✅ This import must be at the top
import Headersection from './../../component/headersection/Headersection';
import {Choosecards} from './../../component/detailscard/Detailscard';

// Global style
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     overflow-x: hidden;
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
      <div className="detailcard">
        <Choosecards/>
      </div>
    </>
  );
}

export default Home;
