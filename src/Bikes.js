import React, { useState, useEffect} from "react";
import createEnturService from '@entur/sdk';


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
