import { useState } from "react";
import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './App.css';

const CLASSES = [
  {
    "Title": "Introduction to Computer Science",
    "Name": "CS111",
    "Prerequisites": "",
    "Availability": "All Semesters/Terms",
    "Description": "Teaches how to design, develop, reason about, and test programs. Topics include higher-order functions, object-oriented programming, recursion, algorithms, data structures, decomposition, interpreters, and regular expressions.",
    "requirements": "minor major",
    "Link": ""
  },
  {
    "Title": "Introduction to Computer Systems",
    "Name": "CS224",
    "Prerequisites": "CS235",
    "Availability": "Fall, Winter, Summer",
    "Description": "How a computer works to execute sequential code: low level data representation and abstraction, the relationship between C and assembly, computer architecture and pipelining, the memory hierarchy, dynamic memory allocation, and linking.",
    "requirements": "",
    "Link": ""
  },
  {
    "Title": "Data Structures",
    "Name": "CS235",
    "Prerequisites": "CS111",
    "Availability": "Fall, Winter",
    "Description": "This course covers the implementation and application of data structures such as lists, stacks, queues, trees, and graphs. Emphasis is on algorithm analysis and design.",
    "requirements": "minor major",
    "Link": "http://university.edu/courses/cs235"
  },
  {
    "Title": "Algorithms and Complexity",
    "Name": "CS312",
    "Prerequisites": "CS235",
    "Availability": "Winter",
    "Description": "Study of algorithms and their complexity. Topics include sorting, searching, graph algorithms, and NP-completeness.",
    "requirements": "major",
    "Link": "http://university.edu/courses/cs312"
  },
  {
    "Title": "Operating Systems",
    "Name": "CS345",
    "Prerequisites": "CS235",
    "Availability": "Fall",
    "Description": "Introduction to operating systems concepts including process management, memory management, file systems, and concurrency.",
    "requirements": "",
    "Link": "http://university.edu/courses/cs345"
  },
  {
    "Title": "Software Engineering",
    "Name": "CS360",
    "Prerequisites": "CS235",
    "Availability": "Spring",
    "Description": "Principles and practices of software engineering. Topics include software development life cycle, project management, and software design patterns.",
    "requirements": "",
    "Link": "http://university.edu/courses/cs360"
  },
  {
    "Title": "Advanced Algorithms and Problem Solving",
    "Name": "CS393",
    "Prerequisites": "C S 312 - Algorithm Design and Analysis",
    "Availability": "Fall, Winter",
    "Description": "This course will help students to become better at problem solving, increasing their ability to excel at technical/coding interviews (a challenging part of the hiring/interviewing process).  Students will build on the algorithms and problem-solving strategies that they were taught and had limited practice with in CS 312. learning primarily through targeted practice.  This will result in (1) strengthened skills in each style of problem-solving strategy and (2) the ability to quickly decide which strategy(ies) to apply to a given problem.  Students are expected to spend 6+ hours outside of class each week solving interview-type problems. ",
    "requirements": "",
    "Link": ""
  },
  {
    "Title": "Ethics and Computers in Society",
    "Name": "CS404",
    "Prerequisites": "None",
    "Availability": "Fall, Winter",
    "Description": "Examination of ethical issues in computing, including privacy, security, and the impact of technology on society.",
    "requirements": "major",
    "Link": "https://learningoutcomes.byu.edu/Courses/program-courses/693220/Computer+Science+BS+/1323"
  },
  {
    "Title": "Mobile and Ubiquitous Human-Computer Interaction",
    "Name": "CS456",
    "Prerequisites": "C S 356 - Advanced Techniques in Human Computer Interaction",
    "Availability": "Winter",
    "Description": "Iterative user experience design for mobile and ubiquitous computing with an emphasis on conceptualization and prototyping in specific contexts. Complete an open-ended project from initial design through functional prototype, with design and critique sessions.",
    "requirements": "",
    "Link": ""
  },
  {
    "Title": "Scripting for Animation",
    "Name": "CSANM 258",
    "Prerequisites": "",
    "Availability": "Winter",
    "Description": "Developing basic scripting skills to procedurally build intricate systems of models, rigs, and animation. Students learn how to reduce manual hours and efficiently create simple to complex effects.",
    "requirements": "csanm",
    "Link": ""
  },
  {
    "Title": "Photography for Animation",
    "Name": "CSANM 355",
    "Prerequisites": "",
    "Availability": "Spring Term",
    "Description": "Layout, references, camera technology and terminology, application of composition, lighting, and core art skills emphasized.",
    "requirements": "csanm",
    "Link": ""
  }
];

function App() {
  const [currentClasses, setCurrentClasses] = useState(CLASSES);
  const [activeFilter, setActiveFilter] = useState('all');

  function filterClasses(filterType) {
    setActiveFilter(filterType);
    if (filterType === 'all') {
      setCurrentClasses(CLASSES);
    } else if (filterType === 'minor') {
      setCurrentClasses(CLASSES.filter(csClass => csClass.requirements.includes("minor")));
    } else if (filterType === 'major') {
      setCurrentClasses(CLASSES.filter(csClass => csClass.requirements.includes("major")));
    } else if (filterType === 'csanm') {
      setCurrentClasses(CLASSES.filter(csClass => csClass.requirements.includes("csanm")));
    } else if (filterType === 'bioinformatics') {
      setCurrentClasses(CLASSES.filter(csClass => csClass.requirements.includes("bioinformatics")));
    } else if (filterType === 'softwareEngineering') {
      setCurrentClasses(CLASSES.filter(csClass => csClass.requirements.includes("softwareEngineering")));
    } else if (filterType === 'machineLearning') {
      setCurrentClasses(CLASSES.filter(csClass => csClass.requirements.includes("machineLearning")));
    }
  }


  return (
    <div>
      <div className="header">
        <h1>CS Classes</h1>
        <div className="buttonContainer">
        <button
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => filterClasses('all')}
          >
            All
          </button>
          <button
            className={`filter-button ${activeFilter === 'minor' ? 'active' : ''}`}
            onClick={() => filterClasses('minor')}
          >
            Minor
          </button>
          <button
            className={`filter-button ${activeFilter === 'major' ? 'active' : ''}`}
            onClick={() => filterClasses('major')}
          >
            Major
          </button>
        </div>
        <div>
          <div className="subtitle">Emphasises 
          <select
            className="filter-dropdown"
            value={activeFilter}
            onChange={(e) => filterClasses(e.target.value)}
          >
            <option value="all">All Classes</option>
            <option value="csanm">Animation and Games</option>
            <option value="bioinformatics">Bioinformatics</option>
            <option value="softwareEngineering">Software Engineering</option>
            <option value="machineLearning">Machine Learning</option>
          </select>
          </div>
        </div>
      </div>
      <div>
      {currentClasses.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.Name} <strong>{item.Title}</strong> <div className="small-text"> Availability: {item.Availability}</div></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <strong>Name:</strong> {item.Name}<br />
              <strong>Prerequisites:</strong> {item.Prerequisites}<br />
              <strong>Availability:</strong> {item.Availability}<br />
              <strong>Description:</strong> {item.Description}<br />
              <a href={item.Link} target="_blank" rel="noopener noreferrer">More Info</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </div>
    </div>
  );
}

export default App;