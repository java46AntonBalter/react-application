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

    return <div
        style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            display: "grid",
            gridTemplateColumns: "15vw 15vw", /* set column sizes here */
            gridTemplateRows: "auto auto", /* we want two rows */
            gridGap: "1vw", /* how far between cells? */
            gridAutoFlow: "column", /* fill in by column, not row */   
            
        }}
    >
        <div style={{
            border: "1px solid #000",
            display: "block",
            textAlign: "center",
            fontSize: "1.5vw",
            backgroundColor: "#0b1b6e",
            color: "white"
        }}>
            <h3>Jerusalem:</h3>
            <div style={{ margin: "1vw 0 1vw" }}><label>{time.toLocaleTimeString('en-US', { timeZone: 'Asia/Jerusalem' })}</label></div>
        </div>
        <div style={{
            border: "1px solid #000",
            display: "block",
            textAlign: "center",
            fontSize: "1.5vw",
            backgroundColor: "#0b1b6e",
            color: "white"
        }}>
            <h3>Tokyo:</h3>
            <div style={{ margin: "1vw 0 1vw" }}><label>{time.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' })}</label></div>
        </div>
        <div style={{
            border: "1px solid #000",
            display: "block",
            textAlign: "center",
            fontSize: "1.5vw",
            backgroundColor: "#0b1b6e",
            color: "white"
        }}>
            <h3>London:</h3>
            <div style={{ margin: "1vw 0 1vw" }}><label>{time.toLocaleTimeString('en-US', { timeZone: 'Europe/London' })}</label></div>
        </div>
        <div style={{
            border: "1px solid #000",
            display: "block",
            textAlign: "center",
            fontSize: "1.5vw",
            backgroundColor: "#0b1b6e",
            color: "white"
        }}>
            <h3>New York:</h3>
            <div style={{ margin: "1vw 0 1vw" }}><label>{time.toLocaleTimeString('en-US', { timeZone: 'America/New_York' })}</label></div>
        </div>
    </div>
}
export default Timer;