import './../../component/notenav/Notenav.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export function Notenav() {
    return (
        <header>
            <div className="header-nav">
                <div className="header-content">
                    <span className="logo-title">📝 Daily Notes</span>

                    <nav className="nav-links">
                        <div className="dropdown">
                            <span className="daily-notes">Frontend ▾</span>
                            <div className="dropdown-content">
                                <Link to="" />
                                <a href="https://www.w3schools.com/html/default.asp" target="_blank"><span>HTML</span></a>
                                <Link />
                                <Link to="" />
                                <a href="https://www.w3schools.com/css/default.asp" target="_blank"><span>CSS</span></a>
                                <Link />
                                <Link to="" />
                                <a href="https://www.w3schools.com/react/default.asp" target="_blank"><span>JavaScript</span></a>
                                <Link />
                                <Link to="" />
                                <a href="https://www.w3schools.com/react/default.asp" target="_blank"><span>React</span></a>
                                <Link />
                                <Link to="" />
                                <a href="https://tailwindcss.com/" target="_blank"><span>Tailwind</span></a>
                                <Link />
                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="daily-notes">Backend ▾</span>
                            <div className="dropdown-content">
                                <Link to="" />
                                <a href="https://www.w3schools.com/nodejs/default.asp" target="_blank"><span>Node Js</span></a>
                                <Link />
                                <Link to="" />
                                <a href="https://expressjs.com/" target="_blank"><span>Express Js</span></a>
                                <Link />
                                <Link to="" />
                                <a href="https://www.w3schools.com/mongodb/index.php" target="_blank"> <span>Mongo Db</span></a>
                                <Link />
                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="daily-notes">Programming ▾</span>
                            <div className="dropdown-content">
                                <Link to="" />
                                <a href="https://www.w3schools.com/c/index.php" target="_blank"><span>C</span></a>
                                <Link />
                                <Link to="" />
                                <a href="https://www.w3schools.com/cpp/default.asp" target="_blank"><span>C++</span></a>
                                <Link />
                                <Link to="" />
                                <a href="https://www.w3schools.com/python/default.asp" target="_blank"><span>Python</span></a>
                                <Link />
                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="daily-notes">Services ▾</span>
                            <div className="dropdown-content">
                                <Link to="" />
                                <a href="https://aws.amazon.com/" target="_blank"><span>A w s</span></a>
                                <Link />
                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="daily-notes">Tips & Tools ▾</span>
                            <div className="dropdown-content">
                                <Link to="" />
                                <a href="https://git-scm.com/" target="_blank"><span>Git</span></a>
                                <Link />
                                <Link to="" />
                                <a href="https://github.com/" target="_blank"><span>Git Hub</span></a>
                                <Link />
                                <Link to="" />
                                <a href="https://www.freepik.com/" target="_blank"><span>Freepik</span></a>
                                <Link />
                                <Link to="" />
                                <a href="https://www.flaticon.com/" target="_blank"><span>Flaticon</span></a>
                                <Link />
                                <Link to="" />
                                <a href="https://vercel.com/nidhinagpures-projects" target="_blank"><span>Vercel</span></a>
                                <Link />
                            </div>
                        </div>

                        <div className="icon-sun">
                            <FontAwesomeIcon icon={faSun} />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Notenav;
