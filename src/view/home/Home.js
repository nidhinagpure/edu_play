import { createGlobalStyle } from 'styled-components';
import Navbarr from './../../component/navbar/Navbarr'; // ✅ This import must be at the top

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
        {/* Your Home content here */}
      </div>
    </>
  );
}

export default Home;
