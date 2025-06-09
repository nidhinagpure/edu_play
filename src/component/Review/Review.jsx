import { createGlobalStyle } from 'styled-components';

import './../../component/Review/Review.css';
import Navbarr from './../../component/navbar/Navbarr';

import { Link } from 'react-router-dom'
 
import review from './../../images/feedback/review-img.png';
import inputlogo from './../../images/feedback/auto-reply.png';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color: #F2F2F2;

  }
`;

function Review(){
    return(
        <>
        <Navbarr/>
          <div className="review-container">
            <img src={review} className="review-img"></img>

             <div className="input-container">
                <div className='input-content'>
                    <img src={inputlogo} className="logo"></img>
                  <p className="sent-feed">Sent Feedback !😊</p>
                  <p><input type='text' placeholder='Your Name' className="input"></input></p>
                  <p><input type="email"placeholder='your E-mail' required className="input"></input></p>
                  <span><input type="text" placeholder='Feedback' className='input-feed'></input></span>
                  <Link to="/feedback" className="link-line">
                    <span className="user-feed">What user say</span>♥️♥️
                    
                    </Link>
                  <div className="re-btn">
                      <button className='review-btn'>Submit</button>
                  </div>

                </div>
                
                
            </div>

          </div>
        
        </>
    );
}
 export  default Review; 