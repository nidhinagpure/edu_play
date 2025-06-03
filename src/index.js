import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Global style
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F2F2F2;
  }
`;

/* View Pages Routing */
import Home from './view/home/Home';
import Login from './view/login/Login';
import Register from './view/register/Register';
import Notes from './view/notes/Notes';
import Doudt from './view/doudt/Doudt';
import Feedback from './view/feedback/Feedback';
import Colleges from './view/colleges/Colleges';

const root = createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/doudt" element={<Doudt />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/colleges" element={<Colleges />} />

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
