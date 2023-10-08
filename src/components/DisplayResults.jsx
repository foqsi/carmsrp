
import React from 'react';

const DisplayResults = ({
    selectedTrimDetail,
    otherVehicleDetails,
    makeModelTrimBody,
    makeModelTrimEngine,
    makeModelTrimMileage,
    makeModelTrimInteriorColors,
    makeModelTrimExteriorColors,
    localMakeBodyTrimData
}) => {


    return (
        <div className='md:p-2'>
            <h2 className='font-bold text-sm md:text-lg my-2'>{selectedTrimDetail}</h2>

            <div className="grid grid-cols-[2fr,3fr] gap-1 m-2">
                <div className='border border-black'>
                    <ul>

                        <p>Name:</p>
                        <p>MSRP:</p>

                        {/* make model trim body */}
                        <h1 className=' font-bold'>BODY</h1>
                        <p>Type:</p>
                        <p>Doors:</p>
                        <p>Seats:</p>
                        <p>Gross Weight:</p>
                        <p>Curb Weight:</p>
                        <p>Height:</p>
                        <p>Length:</p>
                        <p>Width:</p>
                        <p>Wheelbase:</p>
                        <p>Ground Clearance:</p>
                        <p>Max Cargo Capacity:</p>
                        <p>Max Towing Capacity:</p>
                        <p>Max Payload:</p>

                        {/* make model trim engine */}
                        <h1 className=' font-bold'>ENGINE</h1>
                        <p>Size:</p>
                        <p>Cylinders:</p>
                        <p>Valves:</p>
                        <p>Drivetype:</p>
                        <p>Engine Type:</p>
                        <p>Fuel Type:</p>
                        <p>Horsepower:</p>
                        <p>Horsepower RPM:</p>
                        <p>Torque:</p>
                        <p>Torque RPM:</p>

                        {/* make model trim mileage */}
                        <h1 className=' font-bold'>MILEAGE</h1>
                        <p>Combined:</p>
                        <p>City:</p>
                        <p>Highway:</p>
                        <p>Fuel Tank Capacity:</p>
                        <p>Range City:</p>
                        <p></p>


                    </ul>
                </div>
                <div className='border border-black'>
                    <p>{otherVehicleDetails?.name}</p>
                    <p>{otherVehicleDetails?.msrp}</p>


                    {/* make model trim body */}
                    <h1 className='font-bold'>Details</h1>
                    <p>{makeModelTrimBody?.type !== null ? makeModelTrimBody?.type : 'null'}</p>
                    <p>{makeModelTrimBody?.doors !== null ? makeModelTrimBody?.doors : 'null'}</p>
                    <p>{makeModelTrimBody?.seats !== null ? makeModelTrimBody?.seats : 'null'}</p>
                    <p>{makeModelTrimBody?.gross_weight !== null ? makeModelTrimBody?.gross_weight : 'null'}</p>
                    <p>{makeModelTrimBody?.curb_weight !== null ? makeModelTrimBody?.curb_weight : 'null'}</p>
                    <p>{makeModelTrimBody?.height !== null ? makeModelTrimBody?.height : 'null'}</p>
                    <p>{makeModelTrimBody?.length !== null ? makeModelTrimBody?.length : 'null'}</p>
                    <p>{makeModelTrimBody?.width !== null ? makeModelTrimBody?.width : 'null'}</p>
                    <p>{makeModelTrimBody?.wheel_base !== null ? makeModelTrimBody?.wheel_base : 'null'}</p>
                    <p>{makeModelTrimBody?.ground_clearance !== null ? makeModelTrimBody?.ground_clearance : 'null'}</p>
                    <p>{makeModelTrimBody?.max_cargo_capacity !== null ? makeModelTrimBody?.max_cargo_capacity : 'null'}</p>
                    <p>{makeModelTrimBody?.max_towing_capacity !== null ? makeModelTrimBody?.max_towing_capacity : 'null'}</p>
                    <p>{makeModelTrimBody?.max_payload !== null ? makeModelTrimBody?.max_payload : 'null'}</p>

                    {/* make model trim engine */}
                    <h1 className='font-bold'>Engine</h1>
                    <p>{makeModelTrimEngine?.size !== null ? makeModelTrimEngine?.size : 'null'}</p>
                    <p>{makeModelTrimEngine?.cylinders !== null ? makeModelTrimEngine?.cylinders : 'null'}</p>
                    <p>{makeModelTrimEngine?.valves !== null ? makeModelTrimEngine?.valves : 'null'}</p>
                    <p>{makeModelTrimEngine?.drive_type !== null ? makeModelTrimEngine?.drive_type : 'null'}</p>
                    <p>{makeModelTrimEngine?.engine_type !== null ? makeModelTrimEngine?.engine_type : 'null'}</p>
                    <p>{makeModelTrimEngine?.fuel_type !== null ? makeModelTrimEngine?.fuel_type : 'null'}</p>
                    <p>{makeModelTrimEngine?.horsepower_hp !== null ? makeModelTrimEngine?.horsepower_hp : 'null'}</p>
                    <p>{makeModelTrimEngine?.horsepower_rpm !== null ? makeModelTrimEngine?.horsepower_rpm : 'null'}</p>
                    <p>{makeModelTrimEngine?.torque_ft_lbs !== null ? makeModelTrimEngine?.torque_ft_lbs : 'null'}</p>
                    <p>{makeModelTrimEngine?.torque_rpm !== null ? makeModelTrimEngine?.torque_rpm : 'null'}</p>

                    {/* make model trim mileage */}
                    <h1 className='font-bold'>Mileage</h1>
                    <p>{makeModelTrimMileage?.combined_mpg !== null ? makeModelTrimMileage?.combined_mpg : 'null'}</p>
                    <p>{makeModelTrimMileage?.epa_city_mpg !== null ? makeModelTrimMileage?.epa_city_mpg : 'null'}</p>
                    <p>{makeModelTrimMileage?.epa_highway_mpg !== null ? makeModelTrimMileage?.epa_highway_mpg : 'null'}</p>
                    <p>{makeModelTrimMileage?.fuel_tank_capacity !== null ? makeModelTrimMileage?.fuel_tank_capacity : 'null'}</p>
                    <p>{makeModelTrimMileage?.range_city !== null ? makeModelTrimMileage?.range_city : 'null'}</p>

                    {/* make model trim exterior colors */}





                </div>
            </div>
        </div>
    );
};

export default DisplayResults;
