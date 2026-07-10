import { useState, useEffect } from "react";
import "./App.css";

function App() {

    const [time, setTime] = useState(new Date());
    useEffect(()=>{
      setInterval(()=>{
        setTime(new Date());
      },1000)
    },[])

    return (
        <div className="clock-wrapper">
          <div className="clock-body">
              <h1 className="clock-title">Digital Clock</h1>
            <h2 className="clock-display">{time.toLocaleTimeString()}
            </h2>
          </div>
        </div>
    );
}

export default App;