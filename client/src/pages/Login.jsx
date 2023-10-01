import React from 'react'
import { useState, useEffect } from 'react';
import StateDropdown from '../components/stateDropdown';
import PoliceStationDropdown from '../components/PoliceStationDropdown';
import DistrictDropdown from '../components/DistrictDropdown';
import indianData from '../constants';
import Navbar from '../components/Navbar'
import CaptchaGenerator from '../components/generateCapatcha';
import { policebg } from '../assets';
const Login = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [policeStations, setPoliceStations] = useState([]);

  useEffect(() => {
    if (selectedState) {
      // Get the districts for the selected state
      const stateData = indianData[selectedState];
      if (stateData) {
        const districtList = Object.keys(stateData.districts);
        setDistricts(districtList);
      }
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedState && selectedDistrict) {
      // Get the police stations for the selected district
      const stateData = indianData[selectedState];
      if (stateData) {
        const districtData = stateData.districts[selectedDistrict];
        if (districtData) {
          setPoliceStations(districtData.policeStations);
        }
      }
    }
  }, [selectedState, selectedDistrict]);

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    setSelectedDistrict(""); // Reset the selected district
  };

  const handleDistrictChange = (e) => {
    const newDistrict = e.target.value;
    setSelectedDistrict(newDistrict);
  };

  return (
    <div className="login h-screen  bg-no-repeat bg-cover " style={{ backgroundImage: `url(${policebg})` }}>
      <Navbar/>
      <div className='shadow-md flex flex-col justify-center m-10 p-4 bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border text-white border-gray-100 w-1/2' >
<p className=' text-2xl font-semibold my-2'>Police Authentication</p>
<div className="id grid grid-cols-4 my-2">
  <label htmlFor="id">id : </label>
  <input type="text" name='id' className=' ps-3 py-1 border border-slate-500 rounded-md' placeholder='id' />

</div>

<StateDropdown
  states={Object.keys(indianData)}
  selectedState={selectedState}
  onSelectState={handleStateChange}
/>
<DistrictDropdown
  districts={districts}
  selectedDistrict={selectedDistrict}
  onSelectDistrict={handleDistrictChange}
/>
<PoliceStationDropdown policeStations={policeStations} />

<div className="passkey grid grid-cols-4 my-2">
  <label htmlFor="passkey">Passkey : </label>
  <input type="text" name='passkey' className=' ps-3 py-1 border border-slate-500 rounded-md' placeholder='Passkey' />

</div>
<div className="captcha">
<CaptchaGenerator/>

</div>
<div className="btn">
<button className=' bg-slate-200 px-3 py-1  shadow-md rounded-md  '>log in</button>
</div>

</div>
    </div>
   
  );
}

export default Login;
