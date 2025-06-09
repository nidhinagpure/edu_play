import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import './../../view/notes/Notes.css';
import Notenav from './../../component/notenav/Notenav';

import htmllogo from './../../images/notes/html.png';
import csslogo from './../../images/notes/css.png';
import jslogo from './../../images/notes/javascript.png';
import reactlogo from './../../images/notes/react.png';
import awslogo from './../../images/notes/aws.png';
import pythonlogo from './../../images/notes/python.png';

// Each subject has its topics and subtopics
 const subjects = [
  {
    image: htmllogo,
    subname: "HTML",
    topics: [
      {
        question: "Q1: What is HTML5?",
        answer: "HTML5 is the latest version of the HyperText Markup Language used to structure content on the web, introducing new features for multimedia, graphics, and improved semantics."
      },
      {
        question: "Q2: What are some new semantic elements in HTML5?",
        answer: "Elements like <header>, <footer>, <section>, <article>, and <nav> provide better document structure and accessibility."
      },
      {
        question: "Q3: How does HTML5 support multimedia?",
        answer: "It provides native support for audio and video through the <audio> and <video> tags without requiring plugins."
      },
      {
        question: "Q4: What is the purpose of the <canvas> element?",
        answer: "It allows for dynamic, scriptable rendering of 2D graphics using JavaScript."
      },
      {
        question: "Q5: What is localStorage in HTML5?",
        answer: "localStorage lets web applications store data in a browser with no expiration, accessible even after page reloads."
      }
    ]
  },
  {
    image: csslogo,
    subname: "CSS",
    topics: [
      {
        question: "Q1: What is CSS?",
        answer: "CSS (Cascading Style Sheets) describes how HTML elements are to be displayed on screen, paper, or other media."
      },
      {
        question: "Q2: What are selectors in CSS?",
        answer: "Selectors are used to 'select' the HTML elements you want to style, e.g., class, id, element."
      },
      {
        question: "Q3: What is the difference between relative and absolute positioning?",
        answer: "Relative positions the element relative to its normal position; absolute positions it relative to the nearest positioned ancestor."
      },
      {
        question: "Q4: What is Flexbox?",
        answer: "Flexbox is a CSS layout model that allows items to align and distribute space within a container."
      },
      {
        question: "Q5: What is the box model in CSS?",
        answer: "It includes margins, borders, padding, and the content itself, forming the layout structure of an element."
      }
    ]
  },
  {
    image: jslogo,
    subname: "JavaScript",
    topics: [
      {
        question: "Q1: What is JavaScript?",
        answer: "JavaScript is a scripting language used to create and control dynamic content on websites."
      },
      {
        question: "Q2: What is the difference between 'let', 'const', and 'var'?",
        answer: "'let' and 'const' are block-scoped, 'const' cannot be reassigned; 'var' is function-scoped and hoisted."
      },
      {
        question: "Q3: What are arrow functions?",
        answer: "Arrow functions are a shorthand syntax for writing functions using the => operator."
      },
      {
        question: "Q4: What is event bubbling?",
        answer: "Event bubbling is when an event starts at the most specific element and flows upward to the least specific one."
      },
      {
        question: "Q5: What is a promise?",
        answer: "A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation."
      }
    ]
  },
  {
    image: reactlogo,
    subname: "React Js",
    topics: [
      {
        question: "Q1: What is React?",
        answer: "React is a JavaScript library for building user interfaces using components."
      },
      {
        question: "Q2: What are components in React?",
        answer: "Components are independent, reusable pieces of UI built using functions or classes."
      },
      {
        question: "Q3: What is JSX?",
        answer: "JSX is a syntax extension for JavaScript that looks like HTML and is used with React to describe UI elements."
      },
      {
        question: "Q4: What are props in React?",
        answer: "Props are arguments passed into components from parent to child, used to customize behavior or display."
      },
      {
        question: "Q5: What is useState?",
        answer: "`useState` is a React hook that lets you add state to functional components."
      }
    ]
  },
  {
    image: pythonlogo,
    subname: "Python",
    topics: [
      {
        question: "Q1: What is Python?",
        answer: "Python is a high-level, interpreted programming language known for its simplicity and readability."
      },
      {
        question: "Q2: What are Python data types?",
        answer: "Common types include int, float, string, list, tuple, dict, and set."
      },
      {
        question: "Q3: What is a list in Python?",
        answer: "A list is an ordered, mutable collection of items, defined using square brackets."
      },
      {
        question: "Q4: What is the difference between '==' and 'is'?",
        answer: "'==' checks value equality, while 'is' checks identity (memory location)."
      },
      {
        question: "Q5: What is a function in Python?",
        answer: "A function is a block of reusable code defined using the `def` keyword."
      }
    ]
  },
  {
    image: awslogo,
    subname: "AWS",
    topics: [
      {
        question: "Q1: What is AWS?",
        answer: "Amazon Web Services is a cloud platform offering over 200 services including computing, storage, and databases."
      },
      {
        question: "Q2: What is EC2?",
        answer: "EC2 (Elastic Compute Cloud) provides scalable virtual servers for running applications."
      },
      {
        question: "Q3: What is S3?",
        answer: "S3 (Simple Storage Service) is used to store and retrieve any amount of data at any time."
      },
      {
        question: "Q4: What is IAM?",
        answer: "IAM (Identity and Access Management) lets you control access to AWS services and resources securely."
      },
      {
        question: "Q5: What is a VPC?",
        answer: "A Virtual Private Cloud allows you to provision a logically isolated section of AWS to launch resources."
      }
    ]
  }
];
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F2F2F2;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

function DetailNotes() {
  const [visible, setVisible] = useState(null);

  const openBox = (subject) => {
    setVisible(subject);
  };

  const closeBox = () => {
    setVisible(null);
  };

  return (
    <>
      <GlobalStyle />
      <Notenav />

      <div>
        <h1 className="space-ship">Spaceship..😊</h1>
        <p className="space-para">
          Spaceship is a mini Wikipedia 📝 for computer science students, created by RoadToCode.
        </p>
      </div>

      <div className="subject-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {subjects.map((sub, i) => (
          <div key={i} className="subject-item" onClick={() => openBox(sub)}>
            <img src={sub.image} className="icon-notes" alt={sub.subname} />
            <p className="subname">{sub.subname}</p>
          </div>
        ))}
      </div>

      {visible && (
        <div className="subject-popup" onClick={closeBox}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button onClick={closeBox}>❌</button>
            <h2 className="subname-pop">{visible.subname}</h2>
            {visible.topics.map((item, index) => (
              <div key={index} style={{ marginBottom: '15px' }}>
                <span className="sub-topic">{item.question}</span><br></br>
                <span>{item.answer}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default DetailNotes;
