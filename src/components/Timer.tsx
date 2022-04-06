import React, { useEffect } from 'react';
type Props = {
    interval: number
}
const Timer: React.FC<Props> = ({interval}) => {
    const [time, setTime] = React.useState(new Date());
    function tic():void {
        setTime(new Date());
    }
    useEffect(() => {
        setInterval(tic, interval || 1000);
    }, [])

    return <div className="main">
        <div className="time-element">
            <h3>Jerusalem:</h3>
            <div className="time"><label>{time.toLocaleTimeString('en-US', { timeZone: 'Asia/Jerusalem' })}</label></div>
        </div>
        <div className="time-element">
            <h3>Tokyo:</h3>
            <div className="time"><label>{time.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' })}</label></div>
        </div>
        <div className="time-element">
            <h3>London:</h3>
            <div className="time"><label>{time.toLocaleTimeString('en-US', { timeZone: 'Europe/London' })}</label></div>
        </div>
        <div className="time-element">
            <h3>New York:</h3>
            <div className="time"><label>{time.toLocaleTimeString('en-US', { timeZone: 'America/New_York' })}</label></div>
        </div>
    </div>
}
export default Timer;