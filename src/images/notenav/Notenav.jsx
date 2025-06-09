import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../../component/notenav/Notenav.css';

// ✅ Popup Message Component
function Popmsg() {
    const [showMsg, setShowMsg] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowMsg(true);

            const hideTimer = setTimeout(() => {
                setShowMsg(false);
            }, 2000); // hide after 2 seconds

        }, 3000); // repeat every 3 seconds

        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <>
            {showMsg && (
                <div className="pop-msg">
                    <span>"keep going,</span><br></br>
                    <span> your knowledge</span><br></br>
                    <span>is your superpower!"💡</span>
                </div>
            )}
        </>
    );
}

// ✅ Main Navbar Component
function Notenav() {
    return (
        <>
            <Popmsg /> {/* Show popup message on page load */}
            <header>
                <div className="header-nav">
                    <div className="header-content">
                        <Link to="/Home" className="link" >
                            <span className="logo-title"> ↩  Home </span>
                        </Link>

                        <nav className="nav-links">
                            <div className="dropdown">
                                <span className="daily-notes">Frontend ▾</span>
                                <div className="dropdown-content">
                                    <a href="https://www.w3schools.com/html/default.asp" target="_blank"><span>HTML</span></a>
                                    <a href="https://www.w3schools.com/css/default.asp" target="_blank"><span>CSS</span></a>
                                    <a href="https://www.w3schools.com/js/default.asp" target="_blank"><span>JavaScript</span></a>
                                    <a href="https://www.w3schools.com/react/default.asp" target="_blank"><span>React</span></a>
                                    <a href="https://tailwindcss.com/" target="_blank"><span>Tailwind</span></a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <span className="daily-notes">Backend ▾</span>
                                <div className="dropdown-content">
                                    <a href="https://www.w3schools.com/nodejs/default.asp" target="_blank"><span>Node Js</span></a>
                                    <a href="https://expressjs.com/" target="_blank"><span>Express Js</span></a>
                                    <a href="https://www.w3schools.com/mongodb/index.php" target="_blank"><span>Mongo DB</span></a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <span className="daily-notes">Programming ▾</span>
                                <div className="dropdown-content">
                                    <a href="https://www.w3schools.com/c/index.php" target="_blank"><span>C</span></a>
                                    <a href="https://www.w3schools.com/cpp/default.asp" target="_blank"><span>C++</span></a>
                                    <a href="https://www.w3schools.com/python/default.asp" target="_blank"><span>Python</span></a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <span className="daily-notes">Services ▾</span>
                                <div className="dropdown-content">
                                    <a href="https://aws.amazon.com/" target="_blank"><span>AWS</span></a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <span className="daily-notes">Tips & Tools ▾</span>
                                <div className="dropdown-content">
                                    <a href="https://git-scm.com/" target="_blank"><span>Git</span></a>
                                    <a href="https://github.com/" target="_blank"><span>GitHub</span></a>
                                    <a href="https://www.freepik.com/" target="_blank"><span>Freepik</span></a>
                                    <a href="https://www.flaticon.com/" target="_blank"><span>Flaticon</span></a>
                                    <a href="https://vercel.com/nidhinagpures-projects" target="_blank"><span>Vercel</span></a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Notenav;
