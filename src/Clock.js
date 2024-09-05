import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import "./styles/Clock.css";

const Clock = () => {
    const [dateTime, setDateTime] = useState(DateTime.local().setLocale("nb-NO"));

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(DateTime.local().setLocale("nb-NO"));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    return (
    <div className="clock">
        <h2 className="time">
            {dateTime.toLocaleString(DateTime.TIME_24_SIMPLE)}
        </h2>

        <h2 className="date">{dateTime.toLocaleString({
            weekday: "long",
            day: "numeric",
            month: "long"
        })}
        </h2>
        <hr></hr>
    </div>
    );
};

export default Clock;