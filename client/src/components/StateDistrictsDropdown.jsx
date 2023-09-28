import React, { useState } from 'react';
import { stateDistricts } from '../constants';
import DistrictPoliceDropdowns from './DistrictPoliceDropdown';
const StateDistrictsDropdowns = () => {
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  
  // Define a mapping of states and their respective districts
  
  // Handle state selection change
  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedDistrict('');
  };

  // Handle district selection change
  const handleDistrictChange = (event) => {
    const newDistrict = event.target.value;
    setSelectedDistrict(newDistrict);
  };

  return (
    <div className='grid grid-cols-4 gap-4'>
      <div className=' grid grid-cols-2'>
        <label>Select a State:</label>
        <select className=' border border-slate-500 rounded-md' value={selectedState} onChange={handleStateChange}>
          <option value="">Select</option>
          {Object.keys(stateDistricts).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      {selectedState && (
        <div className=' grid grid-cols-2'>
          <label className=''>Select a District:</label>
          <select className=' border border-slate-500 rounded-md' value={selectedDistrict} onChange={handleDistrictChange}>
            <option value="">Select</option>
            {stateDistricts[selectedState].map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
      )}
      {
        
        <DistrictPoliceDropdowns selectedDistrictProp={selectedDistrict} />
            
      }
    </div>
  );
};

export default StateDistrictsDropdowns;
