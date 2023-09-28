import React, { useState, useEffect } from "react";

const PoliceStationDropdown = ({ selectedDistrict }) => {
  const [policeStations, setPoliceStations] = useState([]);

  useEffect(() => {
    // Fetch police stations based on the selected district (You need to implement this)
    // Update the 'policeStations' state with the fetched data
  }, [selectedDistrict]);

  return (
    <div>
      <label>Police Station:</label>
      <select>
        <option value="">Select Police Station</option>
        {policeStations.map((policeStation) => (
          <option key={policeStation.id} value={policeStation.id}>
            {policeStation.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PoliceStationDropdown;
