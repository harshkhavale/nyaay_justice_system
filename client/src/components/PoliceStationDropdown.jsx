import React from "react";

const PoliceStationDropdown = ({ policeStations }) => {
  return (
    <div className=" grid grid-cols-4 my-2">
      <label className="">Police Station:</label>
      <select className=" border border-slate-400 rounded-md px-2">
        <option value="">Select Police Station</option>
        {policeStations.map((station) => (
          <option key={station} value={station}>
            {station}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PoliceStationDropdown;
