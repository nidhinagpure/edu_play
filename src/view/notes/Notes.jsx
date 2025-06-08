import { createGlobalStyle } from 'styled-components';

import './../../view/notes/Notes.css';
import Notenav from './../../component/notenav/Notenav';

import htmllogo from './../../images/notes/html.png';
import csslogo from './../../images/notes/css.png';
import jslogo from './../../images/notes/javascript.png';
import reactlogo from './../../images/notes/react.png';
import awslogo from './../../images/notes/aws.png';
import pythonlogo from './../../images/notes/python.png';

const subject = [
  {
    image: htmllogo,
    subname: "HTML",
  },
  {
    image: csslogo,
    subname: "CSS",
  },

  {
    image: jslogo,
    subname: "JavaScript",
  },
  {
    image: reactlogo,
    subname: "React Js",
  },
  {
    image: pythonlogo,
    subname: "Python",
  },
  {
    image: awslogo,
    subname: "AWS",
  }

];

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F2F2F2;
    margin: 0;
    padding: 0;
    overflow:hiddin
  }
`;


function Notes() {
  return (

    <div>
      <GlobalStyle />
      <Notenav />
      <div>
        <h1 className="space-ship">Spaceship..😊</h1>
        <p className="space-para">Spaceship is a mini Wikipedia 📝 for computer science students, created by RoadToCode.</p>
      </div>
    
      <div className="">

        <div className="subject-container">
          {subject.map((sub, i) => (
            <div key={i} className="subject-item">
              <img src={sub.image} className="icon-notes" alt={sub.subname} />
              <p className="subname">{sub.subname}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Notes;
