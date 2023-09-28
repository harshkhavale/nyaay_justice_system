import React, { useState, useEffect } from "react";

const DistrictDropdown = ({ selectedState, onChange }) => {
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    // Fetch districts based on the selected state (You need to implement this)
    // Update the 'districts' state with the fetched data
  }, [selectedState]);

  const handleDistrictChange = (e) => {
    const newDistrict = e.target.value;
    setSelectedDistrict(newDistrict);
    onChange(newDistrict); // Pass the selected district back to the parent component
  };

  return (
    <div>
      <label>District:</label>
      <select value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="">Select District</option>
        {districts.map((district) => (
          <option key={district.id} value={district.id}>
            {district.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DistrictDropdown;
