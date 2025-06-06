
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './../../component/coursescard/Coursescard.css';
import './../../component/button/button.css'



import Aws from './../../images/coursescard/aws.png';
import Internship from './../../images/coursescard/fullstack.png';
import Python from './../../images/coursescard/python.jpg';

import teacher1 from './../../images/intership/stud1.jpg';
import  teacher2 from './../../images/intership/stud2.jpg';
import  teacher3 from './../../images/intership/stud4.jpg';



const COURSES = [
    {
        id: 2,
        slug: 'fullstack',
        courseimage: Internship,
        coursename: "Internship Cohort Program",
        coueseinfo: "Learn Fullstack Development and Become Internship Ready in Just 8 Months 🚀",
        coursedate: "🗓️ Starting from 16th June 2025",
        coursetime: "⏱️ 7:00 PM - 8:00 PM",
        courseavatar: teacher2,
        courseInstructor: "Suraj Shende",
        courseprice: "₹ 2999/-",
    },
     {
        id: 1,
        slug: 'aws',
        courseimage: Aws,
        coursename: "AWS and DevOps For Beginners",
        coueseinfo: "Learn AWS and DevOps from Scratch and Kickstart your career in and DevOps 🚀",
        coursedate: "🗓️ Starting from 9th June 2025",
        coursetime: "⏱️ 6:00 PM - 7:00 PM",
        courseavatar: teacher1,
        courseInstructor: "Vaibhavi Hole",
        courseprice: "₹ 2999/-"
    },
    {
        id: 3,
        slug: 'Python',
        courseimage: Python,
        coursename: "Python Programming",
        coueseinfo: "Learn Python Programming from Scratch and Master the concepts of Python Programming 🚀",
        coursedate: "🗓️ Starting from 23rd June 2025",
        coursetime: "⏱️ 7:00 PM - 8:00 PM",
        courseavatar: teacher3,
        courseInstructor: "Vaishnavi Hole",
        courseprice: "₹ 999/-",
    },
]



function Courses(props) {
    const { id, slug, courseimage,
        coursename,
        coueseinfo,
        coursedate,
        coursetime,
        courseavatar,
        courseInstructor,
        courseprice } = props;
    return (
        <>
            <div className="course-container">
                <img src={courseimage} alt="image" className="course-image"></img>
                <p className="course-name"> {coursename} </p>
                <p className="course-info"> {coueseinfo} </p>
                <p className="course-date"> {coursedate} </p>
                <p className="course-date"> {coursetime} </p>
                <div className="hr-line"></div>
                <span className="instructor">Instructor</span>
                <div className="hr-line"></div>
                <div className="instructor-conatiner">
                    <img src={courseavatar} alt="image" className="courese-avatar"></img>
                    <span><p className="course-instructor">{courseInstructor}</p></span>
                </div>
                <div className="hr-line"></div>
                <span className="course-price">{courseprice}</span>
                <div className="hr-line"></div>
                 <Knowmorebtn id={id} slug={slug} />
            </div>
        </>

    );
}
 function CoursePage() {
    const { slug } = useParams();

    switch (slug.toLowerCase()) {
        case 'aws':
            return <Awsmore />;
        case 'fullstack':
            return <Fullmore />;
        case 'python':
            return <Pythonmore />;
        default:
            return <div>Course not found</div>;
    }
}
function Knowmorebtn({ id, slug }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/course/${id}/${slug}`);
    };
    return (
        <div className="btn-course">
            <button onClick={handleClick} className="action-button">Know More</button>
        </div>
    )
}


export default function Coursescards() {
    return (
        <>
            <span className="course-polular"><p className="course-most">Our Most <span className="course">Popular Courses</span></p></span>
            <div className="course-content">
                <div className="content" >
                    {COURSES.map((coursedata) => {
                        return (
                            <Courses key={coursedata.id} courseimage={coursedata.courseimage}
                                coursename={coursedata.coursename}
                                coueseinfo={coursedata.coueseinfo}
                                coursedate={coursedata.coursedate}
                                coursetime={coursedata.coursetime}
                                courseavatar={coursedata.courseavatar}
                                courseInstructor={coursedata.courseInstructor}
                                courseprice={coursedata.courseprice}
                                id={coursedata.id}
                                slug={coursedata.slug}
                            />
                        )
                    }
                    )}

                </div>

            </div>

        </>

    );
}
