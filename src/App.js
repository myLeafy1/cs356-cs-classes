import { useState } from "react";
import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './App.css';
import { SUBSET_CLASSES, ALL_CLASSES } from './classes';
import logo from './logo.png';

function App() {
  const [currentClasses, setCurrentClasses] = useState(SUBSET_CLASSES);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  function filterClasses(filterType, searchQuery) {
    let filteredClasses = SUBSET_CLASSES;
    setActiveFilter(filterType);
    if (filterType !== 'all') {
      filteredClasses = filteredClasses.filter(csClass => csClass.requirements.includes(filterType));
    }

    if (searchQuery) {
      filteredClasses = filteredClasses.filter(csClass =>
        csClass.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        csClass.Name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setCurrentClasses(filteredClasses);
  }

  function handleSearch(e) {
    const query = e.target.value;
    setSearchQuery(query);
    filterClasses(activeFilter, query);
  }
  

  return (
    <div>
      <div className="header">
        <h1>CS Classes</h1>
        <img src={logo} alt="Logo" className="logo" />
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
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search classes..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
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