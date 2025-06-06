import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './../../component/intership/Intership.css';

import stud1 from './../../images/intership/stud1.jpg';
import stud2 from './../../images/intership/stud2.jpg';
import stud3 from './../../images/intership/stud3.jpg';
import stud4 from './../../images/intership/stud4.jpg';
import stud5 from './../../images/intership/stud5.jpg';
import stud6 from './../../images/intership/stud6.jpg';
import stud7 from './../../images/intership/stud7.jpg';
import stud8 from './../../images/intership/stud8.jpg';
import stud9 from './../../images/intership/stud9.jpg';
import stud10 from './../../images/intership/stud10.jpg';
import logo1 from './../../images/intership/logo.jpg';
import logo2 from './../../images/intership/logo2.jpg';
import logo3 from './../../images/intership/logo3.png';
import logo4 from './../../images/intership/logo4.jpg';
import logo5 from './../../images/intership/logo5.png';



const INTERS = [
    {
        title: "Frontend Developer Intern",
        image: stud1,
        name: "Alice Johnson",
        company: "TechCorp",
        logo:logo1,
    },
    {
        title: "Backend Developer Intern",
        image: stud2,
        name: "Bob Smith",
        company: "CodeWorks",
        logo:logo2,
    },
    {
        title: "UI/UX Designer Intern",
        image: stud3,
        name: "Cathy Lee",
        company: "Designify",
        logo:logo3,
    },
    {
        title: "Data Analyst Intern",
        image: stud4,
        name: "Daniel Kim",
        company: "DataNest",
        logo:logo4,
    },
    {
        title: "Software Engineer Intern",
        image: stud5,
        name: "Eva Brown",
        company: "SoftServe",
        logo:logo5,
    },
    {
        title: "Machine Learning Intern",
        image: stud6,
        name: "Frank White",
        company: "AIverse",
        logo:logo1,
    },
    {
        title: "Cloud Intern",
        image: stud7,
        name: "Grace Liu",
        company: "CloudZen",
        logo:logo2,
    },
    {
        title: "DevOps Intern",
        image: stud8,
        name: "Henry Green",
        company: "OpsPro",
        logo:logo3,
    },
    {
        title: "Product Manager Intern",
        image: stud9,
        name: "Isla Parker",
        company: "ProdMate",
        logo:logo4,
    },
    {
        title: "QA Tester Intern",
        image: stud10,
        name: "Jack Lee",
        company: "BugTrack",
        logo:logo5,
    }
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

function Interslider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        arrows: true, // hide arrows
        swipe: true,  // enable touch swipe
        draggable: true, // enable mouse drag
        accessibility: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />, // disable keyboard nav if you want
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (

        <div className="inters-wrapper">
            <Slider {...settings}>
                {INTERS.map((inter, index) => (
                    <div className="inter-slide" key={index}>
                        <div className="inters-container">
                            <div className="inter-title">
                                <span>{inter.title}</span>
                            </div>

                            <div className="inter-content">
                                <img src={inter.image} className="inter-image" alt="intern" />
                                <p className="inter-name">{inter.name}</p>
                            </div>
                            <div className="inter-company">
                                <img src={inter.logo} className="inter-logo" alt="logo" />
                                <p className="inter-name">{inter.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default Interslider;
