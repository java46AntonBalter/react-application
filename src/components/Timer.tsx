import React, { useEffect } from 'react';
type Props = {
    city: string,
    locales: string,
    timeZone: string,
    interval?: number
}
const Timer: React.FC<Props> = ({city, locales, timeZone, interval}) => {
    const [time, setTime] = React.useState(new Date());
    function tic():void {
        setTime(new Date());
    }
    useEffect(() => {
        setInterval(tic, interval || 1000);
    }, [interval])

    return <div className="time-element">
            <h3>{city}:</h3>
            <div className="time">{time.toLocaleTimeString( locales, { timeZone: timeZone })}</div>
        </div>
}
export default Timer;