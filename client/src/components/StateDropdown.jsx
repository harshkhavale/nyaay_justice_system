import React, { useState } from "react";

const StateDropdown = ({ onChange }) => {
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    onChange(newState); // Pass the selected state back to the parent component
  };

  return (
    <div>
      <label>State:</label>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
        {/* Populate the dropdown options with your state data */}
        <option value="state1">State 1</option>
        <option value="state2">State 2</option>
        {/* Add more state options here */}
      </select>
    </div>
  );
};

export default StateDropdown;
