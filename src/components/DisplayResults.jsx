import React from 'react';

const DisplayResults = ({ selectedTrimDetail,
    otherVehicleDetails,
    make_Model_Trim_Body,
    make_Model_Trim_Engine,
    make_Model_Trim_Mileage,
    make_Model_Trim_Exterior_Colors,
    make_Model_Trim_Interior_Colors }) => {
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
                    <p>{make_Model_Trim_Body?.type !== null ? make_Model_Trim_Body?.type : 'null'}</p>
                    <p>{make_Model_Trim_Body?.doors !== null ? make_Model_Trim_Body?.doors : 'null'}</p>
                    <p>{make_Model_Trim_Body?.seats !== null ? make_Model_Trim_Body?.seats : 'null'}</p>
                    <p>{make_Model_Trim_Body?.gross_weight !== null ? make_Model_Trim_Body?.gross_weight : 'null'}</p>
                    <p>{make_Model_Trim_Body?.curb_weight !== null ? make_Model_Trim_Body?.curb_weight : 'null'}</p>
                    <p>{make_Model_Trim_Body?.height !== null ? make_Model_Trim_Body?.height : 'null'}</p>
                    <p>{make_Model_Trim_Body?.length !== null ? make_Model_Trim_Body?.length : 'null'}</p>
                    <p>{make_Model_Trim_Body?.width !== null ? make_Model_Trim_Body?.width : 'null'}</p>
                    <p>{make_Model_Trim_Body?.wheel_base !== null ? make_Model_Trim_Body?.wheel_base : 'null'}</p>
                    <p>{make_Model_Trim_Body?.ground_clearance !== null ? make_Model_Trim_Body?.ground_clearance : 'null'}</p>
                    <p>{make_Model_Trim_Body?.max_cargo_capacity !== null ? make_Model_Trim_Body?.max_cargo_capacity : 'null'}</p>
                    <p>{make_Model_Trim_Body?.max_towing_capacity !== null ? make_Model_Trim_Body?.max_towing_capacity : 'null'}</p>
                    <p>{make_Model_Trim_Body?.max_payload !== null ? make_Model_Trim_Body?.max_payload : 'null'}</p>

                    {/* make model trim engine */}
                    <h1 className='font-bold'>Engine</h1>
                    <p>{make_Model_Trim_Engine?.size !== null ? make_Model_Trim_Engine?.size : 'null'}</p>
                    <p>{make_Model_Trim_Engine?.cylinders !== null ? make_Model_Trim_Engine?.cylinders : 'null'}</p>
                    <p>{make_Model_Trim_Engine?.valves !== null ? make_Model_Trim_Engine?.valves : 'null'}</p>
                    <p>{make_Model_Trim_Engine?.drive_type !== null ? make_Model_Trim_Engine?.drive_type : 'null'}</p>
                    <p>{make_Model_Trim_Engine?.engine_type !== null ? make_Model_Trim_Engine?.engine_type : 'null'}</p>
                    <p>{make_Model_Trim_Engine?.fuel_type !== null ? make_Model_Trim_Engine?.fuel_type : 'null'}</p>
                    <p>{make_Model_Trim_Engine?.horsepower_hp !== null ? make_Model_Trim_Engine?.horsepower_hp : 'null'}</p>
                    <p>{make_Model_Trim_Engine?.horsepower_rpm !== null ? make_Model_Trim_Engine?.horsepower_rpm : 'null'}</p>
                    <p>{make_Model_Trim_Engine?.torque_ft_lbs !== null ? make_Model_Trim_Engine?.torque_ft_lbs : 'null'}</p>
                    <p>{make_Model_Trim_Engine?.torque_rpm !== null ? make_Model_Trim_Engine?.torque_rpm : 'null'}</p>

                    {/* make model trim mileage */}
                    <h1 className='font-bold'>Mileage</h1>
                    <p>{make_Model_Trim_Mileage?.combined_mpg !== null ? make_Model_Trim_Mileage?.combined_mpg : 'null'}</p>
                    <p>{make_Model_Trim_Mileage?.epa_city_mpg !== null ? make_Model_Trim_Mileage?.epa_city_mpg : 'null'}</p>
                    <p>{make_Model_Trim_Mileage?.epa_highway_mpg !== null ? make_Model_Trim_Mileage?.epa_highway_mpg : 'null'}</p>
                    <p>{make_Model_Trim_Mileage?.fuel_tank_capacity !== null ? make_Model_Trim_Mileage?.fuel_tank_capacity : 'null'}</p>
                    <p>{make_Model_Trim_Mileage?.range_city !== null ? make_Model_Trim_Mileage?.range_city : 'null'}</p>

                    {/* make model trim exterior colors */}





                </div>
            </div>
        </div>
    );
};

export default DisplayResults;
