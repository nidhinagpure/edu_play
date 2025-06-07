import { createGlobalStyle } from 'styled-components';
import './../../view/colleges/Colleges.css';
import Navbar from './../../component/navbar/Navbarr';
import toast from 'react-hot-toast';

import { useState, useEffect } from 'react';
import { LocateFixed as Location, UserPlus as Studplus } from 'lucide-react';

import logo1 from './../../images/colleges/Parikrama.jpeg';
import logo2 from './../../images/colleges/bhivarabai.png';
import logo3 from './../../images/colleges/padmashri.jpeg';
import logo4 from './../../images/colleges/priyadarshini.jpeg';
import logo5 from './../../images/colleges/raisoni.jpeg';
import logo6 from './../../images/colleges/rajashri.jpg';
import logo7 from './../../images/colleges/tulsiramji.jpeg';
import logo8 from './../../images/colleges/visvesvaraya.png';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     overflow-x: hidden;
    background-color: #F2F2F2;
  }
`;

const colleges = [
  {
    name: "G.H. Raisoni college of engineering and technology, Nagpur",
    city: "Nagpur",
    logo: logo5,
  },
  {
    name: "Parikrama College Of Engineering kasti, Ahemdnagar",
    city: "Chennai",
    logo: logo2,
  },
  {
    name: "Rajashri Shahu Mahavidyalaya, Deolali Pravara(RSMDP)",
    city: "Pune",
    logo: logo3,
  },
  {
    name: "Tulsiramji Gaikwad-Patil College of Engineering and Technology",
    city: "Mohagaon Nagpur",
    logo: logo4,
  },
  {
    name: "Sir Visvesvaraya Institute of Technology",
    city: "Nashik",
    logo: logo5,
  },
  {
    name: "Eastern Horizon College",
    city: "Kolkata",
    logo: logo6,
  },
  {
    name: "Techspire Institute",
    city: "Mumbai",
    logo: logo7,
  },
  {
    name: "Valley Crest University",
    city: "Manali",
    logo: logo8,
  },
  {
    name: "Blue Ridge Engineering College",
    city: "Hyderabad",
    logo: logo6,
  },
  {
    name: "Sunbeam College of Arts",
    city: "Jaipur",
    logo: logo2,
  },
  {
    name: "Infinity Institute of Design",
    city: "Delhi",
    logo: logo1,
  },
  {
    name: "Crystal Lake University",
    city: "Nainital",
    logo: logo8,
  },
  {
    name: "Techtonic Institute of Management",
    city: "Lucknow",
    logo: logo6,
  },
  {
    name: "Dreamwave College",
    city: "Indore",
    logo: logo5,
  },
  {
    name: "Nimbus School of Technology",
    city: "Surat",
    logo: logo3,
  },
  {
    name: "Starlight Academy",
    city: "Noida",
    logo: logo1,
  },
  {
    name: "Quantum Engineering College",
    city: "Nagpur",
    logo: logo5,
  },
  {
    name: "Bright Future University",
    city: "Bhopal",
    logo: logo4,
  },
  {
    name: "Orbit College of Science",
    city: "Thane",
    logo: logo8,
  },
  {
    name: "Evergreen Institute of Arts",
    city: "Shimla",
    logo: logo7,
  }
];


function Collegesearch() {
  const [search, setSearchText] = useState("");
  const [filterColleges, setFilterColleges] = useState(colleges);
  const [filterCity, setFilterCity] = useState("");

  useEffect(() => {
    let collegescard = [...colleges];

    if (search) {
      collegescard = collegescard.filter((college) =>
        college.name.toLowerCase().includes(search) ||
        college.city.toLowerCase().includes(search)
      );
    }

    if (filterCity) {
      collegescard = collegescard.filter((college) => college.city === filterCity);
    }

    setFilterColleges(collegescard);
  }, [search, filterCity]);

  return (
    <div>
      <GlobalStyle/>
      <Navbar />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search colleges"
          className="search-name"
          value={search}
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
        />

        {search && (
          <p className="search-colleges">
            {filterColleges.length === 0
              ? "Oops! No college found... try another search ☹️"
              : `Found ${filterColleges.length} colleges`
              }
          </p>

        )}
              <div className="college-grid">
                {filterColleges.map((college, index) => {
                  const { name, city, logo } = college;
                  return (
                    <div key={index} className="college-card">
                      <div className="college-header">
                        <span>
                          <img src={logo} alt={name} className="logo-college" />
                        </span>
                        <p className="college-name">{name}</p>
                      </div>
                      <div className="college-info">
                        <span><Location className="icon" /> {city}</span>
                        <span><Studplus className="icon" /> {Math.floor(Math.random() * 100) + 20}+ Students</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              </div>
      </div>
      );
}

      export default Collegesearch;
