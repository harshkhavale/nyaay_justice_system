import React from "react";

const DistrictDropdown = ({ districts, selectedDistrict, onSelectDistrict }) => {
  return (
    <div className=" grid grid-cols-4">
      <label className="">District:</label>
      <select className=" border border-slate-400 rounded-md px-2" value={selectedDistrict} onChange={onSelectDistrict}>
        <option value="">Select District</option>
        {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DistrictDropdown;
