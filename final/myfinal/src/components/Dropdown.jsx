import React, { useState } from 'react';
import '../static/css/Dropdown.css';

const Dropdown = () => {
  const [prefer, setPrefer] = useState('none');
  const [specifiedPrefer, setSpecifiedPrefer] = useState('none');
  const [selectedOption, setSelectedOption] = useState('');

  const types = {
    none: ['Please Select'],
    35: ['Pen', 'Sticker', 'Scoker'],
    50: ['T-shirt', 'Hat'],
    100: ['Hoodie', 'Jacket'],
  };

  const handleTypeChange = (event) => {
    setPrefer(event.target.value);
    setSpecifiedPrefer(types[event.target.value][0]);
    setSelectedOption('');
  };

  const handleSpecifyTypeChange = (event) => {
    setSpecifiedPrefer(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='combined-dropdowns'>
      <div className='multy-select-dropdown'>
        <div className='multy-select-dropdown-hobby'>
          <label aria-label="doante amount">
            How much do you want to donate to us every month?
            <select
              id="prefer"
              value={prefer}
              onChange={handleTypeChange}
            >
              <option value="none">Please Select</option>
              <option value="35">$35</option>
              <option value="50">$50</option>
              <option value="100">$100</option>
            </select>
          </label>
        </div>
        <div className='multy-select-dropdown-specify-type'>
          <label aria-label="select item">
            what item your want to get:
            <select
              id="specifiedPrefer"
              value={specifiedPrefer}
              onChange={handleSpecifyTypeChange}
            >
              {types[prefer].map((specifyType) => (
                <option key={specifyType} value={specifyType}>{specifyType}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      
      <div className="subscribe-brand">
        <label htmlFor="dropdown" aria-label="select your favorite">
          <span>Please select your favorite whale:</span>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="none">Please Select</option>
            <option value="bluewhale">Blue Whale</option>
            <option value="finwhale">Fin Whale</option>
            <option value="killerwhale">Killer Whale</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Dropdown;
