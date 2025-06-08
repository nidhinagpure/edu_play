import { href, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import './../../component/footer/Footer.css';

import logo from './../../images/logo.png';
import github from './../../images/footer/github.png';
import instagram from './../../images/footer/instagram.png';
import peerlist from './../../images/footer/peerlists.jpg';
import linkdin from './../../images/footer/linkedin (2).png';
import twitter from './../../images/footer/twitter.png';
import mail from './../../images/footer/mail.png';
import location from './../../images/footer/location.png';
import contact from './../../images/footer/call.png';

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  height: 100%;
  }
`;

const Footer = () => {
    const socialMediaLink = [
        {
            icon: github,
            alt: 'Github',
            href: 'https://github.com/',
        },
        {
            icon: instagram,
            alt: 'Instagram',
            href: 'https://www.instagram.com/',

        },
        {
            icon: peerlist,
            alt: 'Peerlist',
            href: 'https://peerlist.io/',
        },
        {
            icon: twitter,
            alt: 'Twitter',
            href: 'https://x.com/',

        },
        {
            icon: linkdin,
            alt: "Linkdin",
            href:'https://www.linkedin.com/',
        }
    ];

    const contacInfo = [
        {
            icon: mail,
            alt: 'Mail',
            href: 'mailto:agrimart@gmail.com',
        },
        {
            icon: location,
            alt: '404, Laxmi Heights, Above Lotus Multi-speciality Hospital shewalewadi(Hadapsar),pune-412307 ',
            href: 'https://www.google.com/maps',
        },
        {
            icon: contact,
            alt: '+91 9284011752',
            href: 'tel:+9284011752'
        },
    ];

    const footerRoutes = [
        { path: '/Home', name: 'Home' },
        { path: '/courses', name: 'Courses' },
        { path: '/teams/Service', name: 'Teams Of Service' },
        { path: '/refund-Policy', name: 'Refund Policy' },
    ];

    const learn = [
        { path: '/course/full-stack', name: 'Full Stack Deveploment' },
        { path: '/course/python', name: 'Python Programming' },
        { path: '/course/aws', name: 'Aws Services' },
    ];

    return (
        <footer className="footer-container page-wrapper">
            <div className="footer-content">

                <div className="footer-logo">
                    <div>
                        <div className="footer-info">
                            <span><img src={logo} className="footer-icon" ></img></span>
                            <span className="footer-name">Road To Code</span>
                        </div>
                        <div className="footer-paragraph">
                            <p>Affordable Computer Science Education For Everyone. We Provide Quality courses which are trusted by 3000+  students.</p>

                        </div>
                    </div>

                    <div className="footer-social">
                        {socialMediaLink.map((image, index) => (
                            <div key={index}>
                                <Link to={image.href} target="_blank">
                                    <span><img src={image.icon} className="footer-icon" alt={image.alt}></img></span>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>


                <div className="Footer-routes">
                    <span className="footer-title">Quick Links</span>
                    <div>
                        {footerRoutes.map((quick, index) => (
                            <p key={index} >
                                <Link to={quick.path}>
                                    {quick.name}</Link>
                            </p>
                        ))}
                    </div>
                </div>

                <div className="Footer-routes">
                    <span className="footer-title">Learn</span>
                    <div>
                        {learn.map((learn, index) => (
                            <p key={index}>
                                <Link to={learn.path}>
                                    {learn.name}</Link>
                            </p>
                        ))}
                    </div>
                </div>

                <div className="footer-contact">
                    <span className="footer-title">Contact us</span>
                    {contacInfo.map((contacts, index) => (
                        <div key={index} >
                            <Link to={contacts.href}>
                             <span><img src={contacts.icon} className="footer-icon" alt={contacts.alt}></img></span>
                             <span className="footer-contact">{contacts.alt}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );

}

export default Footer;

