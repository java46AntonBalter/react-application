import React from 'react';
import Color from './components/Color';
import InputData from './components/InputData';
import timeZones from './config/time-zones';
import Timer from './components/Timer';
import { HexColorPicker, HexColorInput } from "react-colorful";
import './App.css'

type ComponentNames = "select timezone" | "timer" | "color" | "select color"
function App() {
const [timeZone, setTimeZone] = React.useState("Asia/Jerusalem");
const [color, setColor] = React.useState("red");
const [componentName, setComponentName] = React.useState<ComponentNames>('select timezone');
const mapComponents: Map<ComponentNames, React.ReactNode> = new Map();
mapComponents.set("select color", <div>
      <HexColorPicker color={color} onChange={setColor} />
      <HexColorInput className="colorInput" color={color} onChange={setColor} />
    </div>);
mapComponents.set("color", <Color color={color}></Color>);
mapComponents.set("select timezone", <InputData timeZones={timeZones} injectTimeZone={setTimeZone}></InputData>);
mapComponents.set("timer", <Timer timeZone={timeZone}></Timer>);

  return  <div className="main" style={{display:"flex",  alignItems:"center", flexDirection:"column"}}>
    <div style={{display:"flex",  alignItems:"center", flexDirection:"row", padding:"3vw"}}>
    {Array.from(mapComponents.keys()).map(k => <button className="button" style={{margin:"0.5vw"}} onClick={() => setComponentName(k)}>{k}</button>)}
    </div>
    <br/>
    {mapComponents.get(componentName)}
    </div>
}

export default App;
