import React, { useState, useEffect } from 'react';
import Breadcrumb from './Breadcrumb.jsx';
import DisplayResults from './DisplayResults.jsx';
import '../components/options.css';
import ApiKey from '../utils/apikey.js';

const OptionsList = () => {
    const [currentWindow, setCurrentWindow] = useState('Make');
    const [selectedMake, setSelectedMake] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedTrim, setSelectedTrim] = useState(null);
    const [selectedTrimDetail, setSelectedTrimDetail] = useState(null);
    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const [years, setYears] = useState([]);
    const [trims, setTrims] = useState([]);
    const [trimDetails, setTrimDetails] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [trimDetailToIdMap, setTrimDetailToIdMap] = useState({});

    const [make_Model_Trim_Body, setMake_Model_Trim_Body] = useState({
        cargo_capacity: null,
        curb_weight: null,
        doors: null,
        front_track: null,
        gross_weight: null,
        ground_clearance: null,
        height: null,
        id: null,
        length: null,
        make_model_trim_id: null,
        max_cargo_capacity: null,
        max_payload: null,
        max_towing_capacity: null,
        rear_track: null,
        seats: null,
        type: null,
        wheel_base: null,
        width: null
    });

    const [make_Model_Trim_Engine, setMake_Model_Trim_Engine] = useState({
        cam_type: null,
        cylinders: null,
        drive_type: null,
        engine_type: null,
        fuel_type: null,
        horsepower_hp: null,
        horsepower_rpm: null,
        id: null,
        make_model_trim_id: null,
        size: null,
        torque_ft_lbs: null,
        torque_rpm: null,
        transmission: null,
        valve_timing: null,
        valves: null
    });

    const [make_Model_Trim_Exterior_Colors, setMake_Model_Trim_Exterior_Colors] = useState({});
    const [make_Model_Trim_Interior_Colors, setMake_Model_Trim_Interior_Colors] = useState({});

    const [make_Model_Trim_Mileage, setMake_Model_Trim_Mileage] = useState({
        battery_capacity_electric: null,
        combined_mpg: null,
        epa_city_mpg: null,
        epa_city_mpg_electric: null,
        epa_combined_mpg_electric: null,
        epa_highway_mpg: null,
        epa_highway_mpg_electric: null,
        epa_kwh_100_mi_electric: null,
        epa_time_to_charge_hr_240v_electric: null,
        fuel_tank_capacity: null,
        id: null,
        make_model_trim_id: null,
        range_city: null,
        range_electric: null,
        range_highway: null
    });

    const [other_Vehicle_Details, setOther_Vehicle_Details] = useState({
        invoice: null,
        msrp: null,
        vehicle_name: null
    });


    const handleBreadCrumbClick = (level) => {
        switch (level) {
            case 'Make':
                setSelectedMake(null);
                setSelectedModel(null);
                setSelectedYear(null);
                setSelectedTrim(null);
                setSelectedTrimDetail(null);
                setCurrentWindow('Make');
                break;
            case 'Model':
                setSelectedModel(null);
                setSelectedYear(null);
                setSelectedTrim(null);
                setSelectedTrimDetail(null);
                setCurrentWindow('Make');
                break;
            case 'Year':
                setSelectedYear(null);
                setSelectedTrim(null);
                setSelectedTrimDetail(null);
                setCurrentWindow(selectedMake);
                break;
            case 'Trim':
                setSelectedTrim(null);
                setSelectedTrimDetail(null);
                setCurrentWindow(selectedModel);
                break;
            case 'Details':
                setSelectedTrimDetail(null);
                setCurrentWindow(selectedYear);
                break;
            default:
                break;
        }
    };

    // GET MAKES
    useEffect(() => {
        const url = 'https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=name';

        const headers = {
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        };

        fetch(url, { headers })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    console.log('Not successful');
                    throw new Error('Not successful');
                }
            })
            .then(data => {
                const uniqueBrands = new Set();
                data.data.forEach(item => {
                    uniqueBrands.add(item);
                });
                const uniqueBrandsArray = Array.from(uniqueBrands);
                setMakes(uniqueBrandsArray);
            })
            .catch(err => {
                console.error('An error occurred:', err);
            });
    }, []);

    // GET MODELS
    useEffect(() => {
        if (!selectedMake) return;
        let url = `https://car-api2.p.rapidapi.com/api/models?make=${selectedMake}&sort=name&direction=asc&verbose=yes`;
        const headers = {
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        };

        fetch(url, { headers })
            .then(res => res.json())
            .then(data => {
                const modelNames = data.data.map(model => model.name);
                setModels(modelNames);
            })

            .catch(err => console.error(err));
    }, [selectedMake]);

    // GET YEARS
    useEffect(() => {
        if (!selectedModel) return;
        let url = `https://car-api2.p.rapidapi.com/api/years?model=${selectedModel}`;
        const headers = {
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        };

        fetch(url, { headers })
            .then(res => res.json())
            .then(data => {
                const uniqueYears = new Set();
                data.forEach(item => {
                    uniqueYears.add(item);
                });
                const uniqueYearsArray = Array.from(uniqueYears);
                setYears(uniqueYearsArray);
            })
            .catch(err => console.error(err));
    }, [selectedModel]);

    // GET TRIMS
    useEffect(() => {
        if (!selectedYear) return;
        let url = `https://car-api2.p.rapidapi.com/api/trims?direction=asc&sort=name&year=${selectedYear}&model=${selectedModel}&verbose=yes&make=${selectedMake}`;
        const headers = {
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        };

        fetch(url, { headers })
            .then(res => res.json())
            .then(data => {
                const uniqueTrims = new Set();
                data.data.forEach(item => {
                    uniqueTrims.add(item.name);
                });
                const uniqueTrimsArray = Array.from(uniqueTrims);
                setTrims(uniqueTrimsArray);
            })
    }, [selectedYear]);

    // GET TRIM DETAILS && VEHICLE IDS
    useEffect(() => {
        if (!selectedTrim) return;
        let url = `https://car-api2.p.rapidapi.com/api/trims?direction=asc&sort=id&year=${selectedYear}&model=${selectedModel}&trim=${selectedTrim}&verbose=yes&make=${selectedMake}`;
        const headers = {
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        };

        fetch(url, { headers })
            .then(res => res.json())
            .then(data => {
                const uniqueTrimDetail = new Set();
                const uniqueIds = new Set();
                const newTrimDetailToIdMap = {};

                data.data.forEach(item => {
                    uniqueTrimDetail.add(item.description);
                    uniqueIds.add(item.id);
                    newTrimDetailToIdMap[item.description] = item.id;
                });

                const uniqueTrimDetailArray = Array.from(uniqueTrimDetail);
                const uniqueIdsArray = Array.from(uniqueIds);

                setTrimDetails(uniqueTrimDetailArray);
                setSelectedIds(uniqueIdsArray);
                setTrimDetailToIdMap(newTrimDetailToIdMap);
            })
    }, [selectedTrim]);

    // GET VEHICLE INFORMATION
    useEffect(() => {
        if (!selectedIds) return;

        let url = `https://car-api2.p.rapidapi.com/api/trims/${selectedIds}`;
        const headers = {
            'X-RapidAPI-Key': ApiKey,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        };

        fetch(url, { headers })
            .then(res => res.json())
            .then(data => {
                setOther_Vehicle_Details({
                    msrp: data.msrp,
                    name: data.name,
                    invoice: data.invoice
                });
                setMake_Model_Trim_Body({
                    cargo_capacity: data.make_model_trim_body.cargo_capacity,
                    curb_weight: data.make_model_trim_body.curb_weight,
                    doors: data.make_model_trim_body.doors,
                    front_track: data.make_model_trim_body.front_track,
                    gross_weight: data.make_model_trim_body.gross_weight,
                    ground_clearance: data.make_model_trim_body.ground_clearance,
                    height: data.make_model_trim_body.height,
                    id: data.make_model_trim_body.id,
                    length: data.make_model_trim_body.length,
                    make_model_trim_id: data.make_model_trim_body.make_model_trim_id,
                    max_cargo_capacity: data.make_model_trim_body.max_cargo_capacity,
                    max_payload: data.make_model_trim_body.max_payload,
                    max_towing_capacity: data.make_model_trim_body.max_towing_capacity,
                    rear_track: data.make_model_trim_body.rear_track,
                    seats: data.make_model_trim_body.seats,
                    type: data.make_model_trim_body.type,
                    wheel_base: data.make_model_trim_body.wheel_base,
                    width: data.make_model_trim_body.width
                });
            })
            .catch(err => console.error(err));
    }, [selectedIds]);



    const allSelected = selectedMake && selectedModel && selectedYear && selectedTrim && selectedTrimDetail;

    return (
        <>
            <div className="bg-slate-200 text-black p-4 md:p-8 rounded-lg shadow-lg w-full md:w-[700px] h-full md:h-[800px] text-center opacity-95 transition-all duration-700 ease-in-out overflow-y-hidden flex flex-col justify-between">
                <Breadcrumb
                    currentWindow={currentWindow}
                    handleBreadCrumbClick={handleBreadCrumbClick}
                    selectedMake={selectedMake}
                    selectedModel={selectedModel}
                    selectedYear={selectedYear}
                    selectedTrim={selectedTrim}
                />

                <div className='overflow-hidden flex-1 flex items-center justify-center'>
                    <div className="overflow-hidden overflow-y-auto hide-scrollbar bg-white text-black p-2 md:p-6 m-1 md:m-6 rounded-lg shadow-lg w-full md:w-[600px] h-[60vh] md:h-[700px] text-center opacity-95 transition-all duration-700 ease-in-out">
                        {/* Content */}
                        <>
                            {allSelected ? (
                                <DisplayResults
                                    selectedMake={selectedMake}
                                    selectedModel={selectedModel}
                                    selectedYear={selectedYear}
                                    selectedTrim={selectedTrim}
                                    selectedTrimDetail={selectedTrimDetail}
                                    otherVehicleDetails={other_Vehicle_Details}
                                />

                            ) : (
                                selectedTrim ? (
                                    trimDetails.map((trimDetail, index) => (
                                        <div key={index} onClick={() => {
                                            setSelectedTrimDetail(trimDetail);
                                            setSelectedIds(trimDetailToIdMap[trimDetail]);
                                            setCurrentWindow('Detail');
                                        }} className='default-hover border border-gray'>
                                            {trimDetail}
                                        </div>
                                    ))
                                ) : (
                                    selectedYear ? (
                                        trims.map((trim, index) => (
                                            <div key={index} onClick={() => { setSelectedTrim(trim); setCurrentWindow(selectedYear); }} className='default-hover'>
                                                {trim}
                                            </div>
                                        ))
                                    ) : (
                                        selectedModel ? (
                                            years.map((year, index) => (
                                                <div key={index} onClick={() => { setSelectedYear(year); setCurrentWindow(selectedModel); }} className='default-hover'>
                                                    {year}
                                                </div>
                                            ))
                                        ) : (
                                            selectedMake ? (
                                                models.map((model, index) => (
                                                    <div key={index} onClick={() => { setSelectedModel(model); setCurrentWindow(selectedMake); }} className='default-hover'>
                                                        {model}
                                                    </div>
                                                ))
                                            ) : (
                                                makes.map((make, index) => (
                                                    <div key={index} onClick={() => { setSelectedMake(make.name); setCurrentWindow('Make'); }} className='default-hover'>
                                                        {make.name}
                                                    </div>
                                                ))
                                            )
                                        )
                                    )
                                )
                            )}
                        </>
                    </div>
                </div>
            </div >
        </>
    );
};

export default OptionsList;