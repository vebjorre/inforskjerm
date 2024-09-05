import createEnturService from '@entur/sdk';
import React, { useEffect, useState } from "react";


const service = createEnturService({ clientName: 'superbur-inforskjermkurs' });

const Bikes = () => {
    const [bikeStations, setBikeStations] = useState([]);
    useEffect(() => {
        service.getBikeRentalStationsByPosition({latitude: 59.9481009, longitude: 10.7446228},
            1000
            )
            .then((data) => setBikeStations(data));
    }, []);

    console.log(bikeStations);
    return <div className="BikeStations">
        <h2>Bysykkel</h2>
        {bikeStations.map((stationData)  => (
            <Station key={stationData.id} station={stationData} />
        ))}
        <h4>(Data provided by Entur)</h4>
        </div>;
};

export default Bikes;


const Station = (props) => {
    const { station } = props;

    console.log(station);
    return <div className="station">
        {station.name} - bikes: {station.bikesAvailable}, spaces: {station.spacesAvailable}.
        </div>
};
