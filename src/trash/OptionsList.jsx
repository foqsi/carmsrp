import React, { useState, useEffect } from 'react';
import Breadcrumb from './Breadcrumb.jsx';
import DisplayResults from './DisplayResults.jsx';
import * as ApiService from '../../src/api/service/ApiService.js';
// import useVehicleDetails from '../utils/vehicleDetails.js';
import '../../src/index.js';

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
    const [selectedId, setSelectedId] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [trimDetailToIdMap, setTrimDetailToIdMap] = useState({});
    const [makeModelTrimBody, setMakeModelTrimBody] = useState();
    const [makeModelTrimEngine, setMakeModelTrimEngine] = useState();
    const [makeModelTrimMileage, setMakeModelTrimMileage] = useState();
    const [makeModelTrimExteriorColors, setMakeModelTrimExteriorColors] = useState();
    const [makeModelTrimInteriorColors, setMakeModelTrimInteriorColors] = useState();
    const [otherVehicleDetails, setOtherVehicleDetails] = useState({});

    useEffect(() => {
        const loadMakes = async () => {
            try {
                const data = await ApiService.fetchMakes();
                setMakes(data.data);
            } catch (error) {
                console.error("Error fetching makes: ", error);
            }
        };

        loadMakes();
    }, []);

    useEffect(() => {
        const loadModels = async () => {
            if (selectedMake) {
                try {
                    const data = await ApiService.fetchModels(selectedMake);
                    setModels(data.data.map(model => model.name));
                } catch (error) {
                    console.error("Error fetching models: ", error);
                }
            }
        };

        loadModels();
    }, [selectedMake]);

    useEffect(() => {
        const loadYears = async () => {
            if (selectedModel) {
                try {
                    const data = await ApiService.fetchYears(selectedModel);
                    const uniqueYears = new Set(data);
                    const uniqueYearsArray = Array.from(uniqueYears);

                    setYears(uniqueYearsArray);

                } catch (error) {
                    console.error("Error fetching years: ", error);
                }
            }
        };

        loadYears();
    }, [selectedModel]);

    useEffect(() => {
        const loadTrims = async () => {
            if (selectedYear) {
                try {
                    const data = await ApiService.fetchTrims(selectedMake, selectedModel, selectedYear);
                    const uniqueTrims = new Set(data.data.map(item => item.name));
                    setTrims([...uniqueTrims]);

                } catch (error) {
                    console.error("Error fetching trims: ", error);
                }
            }
        };

        loadTrims();
    }, [selectedYear, selectedModel, selectedMake]);

    useEffect(() => {
        const loadTrimDetails = async () => {
            if (selectedTrim) {
                try {
                    const {
                        trimDetails: uniqueTrimDetailArray,
                        selectedIds: uniqueIdsArray,
                        trimDetailToIdMap: newTrimDetailToIdMap
                    } = await ApiService.fetchTrimDetails(selectedMake, selectedModel, selectedYear, selectedTrim);

                    setTrimDetails(uniqueTrimDetailArray);
                    setSelectedIds(uniqueIdsArray);
                    setTrimDetailToIdMap(newTrimDetailToIdMap);

                } catch (error) {
                    console.error("Error fetching trim details: ", error);
                }
            }
        };

        loadTrimDetails();
    }, [selectedTrim, selectedMake, selectedModel, selectedYear]);

    useEffect(() => {
        if (!selectedIds) return;
        const fetchData = async () => {

            try {
                const vehicleData = await ApiService.fetchVehicleInformation(selectedId);
                if (vehicleData) {
                    setOtherVehicleDetails(vehicleData);
                }
                if (vehicleData.make_model_trim_body) {
                    setMakeModelTrimBody(vehicleData.make_model_trim_body);
                }
                if (vehicleData.make_model_trim_engine) {
                    setMakeModelTrimEngine(vehicleData.make_model_trim_engine);
                }
                if (vehicleData.make_model_trim_mileage) {
                    setMakeModelTrimMileage(vehicleData.make_model_trim_mileage);
                }
                // const exteriorColorsData = await ApiService.fetchExteriorColors(selectedId);
                // setMakeModelTrimExteriorColors(exteriorColorsData);

                // const interiorColorsData = await ApiService.fetchInteriorColors(selectedId);
                // setMakeModelTrimInteriorColors(interiorColorsData);
            } catch (error) {
                console.error("Error fetching vehicle information: ", error);
            }
        };

        fetchData();
    }, [selectedId]);

    const allSelected = selectedMake && selectedModel && selectedYear && selectedTrim && selectedTrimDetail;

    return (
        <>
            <div className="bg-slate-200 text-black p-4 md:p-8 rounded-lg shadow-lg w-full md:w-[700px] h-full md:h-[800px] text-center opacity-95 transition-all duration-700 ease-in-out overflow-y-hidden flex flex-col justify-between">
                <Breadcrumb
                    currentWindow={currentWindow}
                    selectedMake={selectedMake}
                    selectedModel={selectedModel}
                    selectedYear={selectedYear}
                    selectedTrim={selectedTrim}
                    setSelectedMake={setSelectedMake}
                    setSelectedModel={setSelectedModel}
                    setSelectedYear={setSelectedYear}
                    setSelectedTrim={setSelectedTrim}
                    setSelectedTrimDetail={setSelectedTrimDetail}
                    setCurrentWindow={setCurrentWindow}
                />


                <div className='overflow-hidden flex-1 flex items-center justify-center'>
                    <div className="overflow-hidden overflow-y-auto hide-scrollbar bg-white text-black p-2 md:p-6 m-1 md:m-6 rounded-lg shadow-lg w-full md:w-[600px] h-[60vh] md:h-[700px] text-center opacity-95 transition-all duration-700 ease-in-out">
                        <>
                            {allSelected ? (
                                <DisplayResults
                                    selectedTrimDetail={selectedTrimDetail}
                                    otherVehicleDetails={otherVehicleDetails}
                                    makeModelTrimBody={makeModelTrimBody}
                                    makeModelTrimEngine={makeModelTrimEngine}
                                    makeModelTrimMileage={makeModelTrimMileage}
                                    makeModelTrimExteriorColors={makeModelTrimExteriorColors}
                                    makeModelTrimInteriorColors={makeModelTrimInteriorColors}
                                />


                            ) : (
                                selectedTrim ? (
                                    trimDetails.map((trimDetail, index) => (
                                        <div key={index} onClick={() => {
                                            setSelectedTrimDetail(trimDetail);
                                            setSelectedId(trimDetailToIdMap[trimDetail]);
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