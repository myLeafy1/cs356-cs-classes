import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {
  const CLASSES = [
    {
      "Title": "Data Structures",
      "Name": "CS235",
      "Prerequisites": "CS101",
      "Availability": "Fall, Winter",
      "Description": "This course covers the implementation and application of data structures such as lists, stacks, queues, trees, and graphs. Emphasis is on algorithm analysis and design.",
      "Link": "http://university.edu/courses/cs235"
    },
    {
      "Title": "Algorithms and Complexity",
      "Name": "CS312",
      "Prerequisites": "CS235",
      "Availability": "Winter",
      "Description": "Study of algorithms and their complexity. Topics include sorting, searching, graph algorithms, and NP-completeness.",
      "Link": "http://university.edu/courses/cs312"
    },
    {
      "Title": "Operating Systems",
      "Name": "CS345",
      "Prerequisites": "CS235",
      "Availability": "Fall",
      "Description": "Introduction to operating systems concepts including process management, memory management, file systems, and concurrency.",
      "Link": "http://university.edu/courses/cs345"
    },
    {
      "Title": "Software Engineering",
      "Name": "CS360",
      "Prerequisites": "CS235",
      "Availability": "Spring",
      "Description": "Principles and practices of software engineering. Topics include software development life cycle, project management, and software design patterns.",
      "Link": "http://university.edu/courses/cs360"
    },
    {
      "Title": "Ethics and Computers in Society",
      "Name": "CS404",
      "Prerequisites": "None",
      "Availability": "Fall, Winter",
      "Description": "Examination of ethical issues in computing, including privacy, security, and the impact of technology on society.",
      "Link": "https://learningoutcomes.byu.edu/Courses/program-courses/693220/Computer+Science+BS+/1323"
    }
  ];

  return (
    <div>
      {CLASSES.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.Title}</Typography>
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
  );
}

export default App;