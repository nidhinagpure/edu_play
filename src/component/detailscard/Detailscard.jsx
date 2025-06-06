import './../../component/detailscard/Detailscard.css';

import Affordable from './../../images/detailcard/affordable.png';
import Live from './../../images/detailcard/affordable.png';
import Recorded from './../../images/detailcard/recording.png';
import Doubt from './../../images/detailcard/doudt.png';
import Language from './../../images/detailcard/language.png';
import Notes from './../../images/detailcard/notes.png';
import Group from './../../images/detailcard/group.png';
import Interviews from './../../images/detailcard/interview.png';
import Network from './../../images/detailcard/network.png';

import Interslider from './../../component/intership/Intership';


const CARDS = [
  {
    imageUrl: Affordable,
    title: "Affordable Pricing",
    information: "Our course price are around ₹2999. Which is less than 1% of the cost of a college degree in India, and we provide more practical and industry-oriented knowledge.",
  },
  {
    imageUrl: Live,
    title: "Live Interactive Classes",
    information: "Attend live class and get your doubts cleared by the instructor in real-time just like a physical classroom. No boring pre-recorded videos.",
  },
  {
    imageUrl: Recorded,
    title: "Recorded Videos of Live Classes",
    information: "Missed a class? or want to revise? No worries, watch the recorded sessions of live classes multiple times at your own pace and time to understand the concepts better.",
  },
  {
    imageUrl: Doubt,
    title: "Quick Doubt Resolutions",
    information: "Get your doubts resolved quickly. No more waiting for the next class. Once you ask a doubt our teaching assistants will resolve it as soon as possible.",
  },
  {
    imageUrl: Language,
    title: "Language Support",
    information: "We teach in Hindi and English(Hinglish) to make sure that language is not a barrier in your learning journey. We also support doubt resolution in Hindi, English and Marathi(मराठी).",
  },
  {
    imageUrl: Notes,
    title: "Lifetime Free Notes",
    information: "Get lifetime access of the notes that you can refer anytime in the future. High-quality notes prepared by the instructor. No need to buy any books.",
  },
  {
    imageUrl: Group,
    title: "Group Projects",
    information: "Work on real-world projects in a group to get the feel of working in a team.",
  },
  {
    imageUrl: Interviews,
    title: "Mock Interviews",
    information: "Get prepared for the job interviews with our mock interviews and feedback from the industry experts.",
  },
  {
    imageUrl: Network,
    title: "Professional Network",
    information: "Unlock opportunities by learning correct way of using Peerlist and LinkedIn for hunting jobs and internships.",
  },
]
function Choosecard({ imageUrl, title, information }) {
    return (
        <>
            <div className=" fixed-box">

                <div className="choose-content">
                    <img src={imageUrl} className="choose-image" alt="image"></img>
                    <span className="choose-title">{title}</span>
                </div>
                <p className="choose-lines">{information}</p>
            </div>
        </>

    );
}

export function Choosecards() {
  return (
    <>
      <div>
        <div className="cards-maping" >
          {CARDS.map((card,i) => {
            return (
              <Choosecard key={i}
                imageUrl={card.imageUrl}
                title={card.title}
                information={card.information} />)
          })
          }
        </div>
      </div>
       <div className='choose-us'>
                <span className="ineter-achiev">Internship Achievers</span><br></br><br></br>
                <span className="inter-ship">Students who got an internship after learning from us!!!</span>
    </div>
    <div>
        <Interslider/>
    </div>
    </>

  );

}



