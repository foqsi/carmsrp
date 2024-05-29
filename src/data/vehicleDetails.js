import { useState } from 'react';

const useVehicleDetails = () => {
    const [make_model_trim_exterior_colors, setmake_model_trim_exterior_colors] = useState({});
    const [make_model_trim_interior_colors, setmake_model_trim_interior_colors] = useState({});

    const [make_model_trim_body, setmake_model_trim_body] = useState({
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

    const [make_model_trim_engine, setmake_model_trim_engine] = useState({
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

    const [make_model_trim_mileage, setmake_model_trim_mileage] = useState({
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

    const [otherVehicleDetails, setOtherVehicleDetails] = useState({
        invoice: null,
        msrp: null,
        vehicle_name: null
    });

    return {
        make_model_trim_body,
        setmake_model_trim_body,
        make_model_trim_engine,
        setmake_model_trim_engine,
        make_model_trim_interior_colors,
        setmake_model_trim_interior_colors,
        make_model_trim_exterior_colors,
        setmake_model_trim_exterior_colors,
        make_model_trim_mileage,
        setmake_model_trim_mileage,
        otherVehicleDetails,
        setOtherVehicleDetails
    }
};

export default useVehicleDetails;