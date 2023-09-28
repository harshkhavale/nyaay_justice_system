import React, { useState } from 'react';

const DistrictPoliceDropdown = ({ selectedDistrict }) => {
  const [selectedPoliceStation, setSelectedPoliceStation] = useState('');

  // Define a mapping of districts and their respective police stations
  const districtPoliceStations = {
    "Sangli": ["miraj", "kupwad", "PoliceStation1A3"],
    "Latur": ["PoliceStation1B1", "PoliceStation1B2", "PoliceStation1B3"],
    "Gondia": ["PoliceStation1C1", "PoliceStation1C2", "PoliceStation1C3"],
    "Pune": ["PoliceStation2A1", "PoliceStation2A2", "PoliceStation2A3"],
    "District2B": ["PoliceStation2B1", "PoliceStation2B2", "PoliceStation2B3"],
    "District2C": ["PoliceStation2C1", "PoliceStation2C2", "PoliceStation2C3"],
    // Add more districts and police stations as needed
  };

  // Handle police station selection change
  const handlePoliceStationChange = (event) => {
    const newPoliceStation = event.target.value;
    setSelectedPoliceStation(newPoliceStation);
  };

  return (
    <div>
      <div className='grid grid-cols-2'>
        <label>Select a Police Station:</label>
        <select className='border border-slate-500 rounded-md' value={selectedPoliceStation} onChange={handlePoliceStationChange}>
          <option value="">Select</option>
          {districtPoliceStations[selectedDistrict] && districtPoliceStations[selectedDistrict].map((policeStation) => (
            <option key={policeStation} value={policeStation}>
              {policeStation}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DistrictPoliceDropdown;
