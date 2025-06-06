import './../headersection/Headersection.css';
import './../button/button.css'

import practical from './../../images/headersection/practice.webp';
import trophy from './../../images/headersection/trophy.webp';
import video  from './../../images/headersection/video-lesson.png'; 

import baches from './../../images/headersection/baches.png';
import education from './../../images/headersection/education.png';
import employee from './../../images/headersection/employee.png';
import student from './../../images/headersection/students.png';


function Headercontent(props){
     const { image , title , info, i } = props;
    return(
        <>
        <div className="herader-div" key={i}>
            <img src={image} className="header-img" alt="image"></img>
            <div className="header-info-div">
                <span className="header-title">{title}</span><br></br>
                <span className="header-info">{info}</span>
            </div>
        </div>
        </>
    );
}

function Headerhero(props){
     const { heroimage, studnum, name } = props;
    return (
        <>
            <div>
                <div>
                    <img src={heroimage} alt="student" className="info-image" /><br></br>
                </div>
                <div>
                    <span className="info-num">{studnum}</span><br></br>
                    <span className="info-about">{name}</span>
                </div>
            </div>
        </>

    );
}

function Headersection(){
    return(
        <>
        <div className="header-wrapper">
  {/* Left section */}
  <div className="header-left">
    <h2 className="header-stud">Quality courses at affordable pricing,<br />trusted by 2000+ students.</h2>
    <p className="subtext">We help you to learn the latest technologies and tools to kickstart your career in <br></br>tech.</p>
    <h3 className="highlight">Learn, Practice, Master and Achieve.</h3>
    <div className="header-buttons">
      <button className="btn yellow">🚀 Courses</button>
      <button className="btn black">🔐 Login</button>
    </div>
  </div>

  {/* Right section */}
  <div className="header-right">
    <Headercontent 
      image= {practical}
      title="Enroll and get started."
      info="Join live interactive classes and learn from the best instructors."
    />
    <Headercontent 
      image= {trophy}
      title="Learn, Practice, and Master."
      info="Learn, resolve doubts, and practice with real-world projects."
    />
    <Headercontent 
      image= {video}
      title="Grab the opportunity."
      info="Apply for internships and jobs with the skills you have learned."
    />
  </div>

</div>
<div className="info-div">
    <Headerhero heroimage={baches}
    studnum="3000+"
    name="Total Students"

     />
     <Headerhero heroimage={education}
    studnum="110+"
    name="Colleges"

     />
     <Headerhero heroimage={employee}
      studnum="3000+"
      name="Enrollments"

     />
     <Headerhero heroimage={student}
     studnum="30+"
     name="Completed Batches"/>
</div>

      <div className='choose-us'>
                <span className="chooseus">Why to choose</span><span className="rtc">Road To Code?</span>
    </div>

</>

    );
}

export default Headersection;