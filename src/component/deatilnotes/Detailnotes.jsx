import React, { useState } from 'react';
import './../../component/detailnotes/Detailnotes.css';  // corrected path typo
import Notes from './../../view/notes/Notes';

const subject = [
    { topic: "hhh", subtopic: "hhhhh" },
    { topic: "hhh", subtopic: "2ijsjjsj" },
    { topic: "hhh", subtopic: "skksksk" },
    { topic: "hhh", subtopic: "sjjsjsj" },
    { topic: "hhh", subtopic: "sjjsj" },
    { topic: "hhh", subtopic: "ss" },
    { topic: "hhh", subtopic: "ssss" },
];

function Detailnotes() {
    const [visible, setVisible] = useState(null);

    const openbox = (sub) => {
        setVisible(sub);
    };

    const closebox = () => {
        setVisible(null);
    };

    return (
        <div>
            {subject.map((sub, i) => (
                <div key={i} className="overlay" onClick={() => openbox(sub)}>
                    <p>{sub.topic}</p>
                    <p>{sub.subtopic}</p>
                </div>
            ))}

            {visible && (
                <Notes subject={visible} onclose={closebox} />
            )}
        </div>
    );
}

export default Detailnotes;
