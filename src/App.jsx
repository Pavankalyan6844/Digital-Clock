
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const greeting = () => {
    const hour = time.getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    if (hour < 21) return "Good Evening";

    return "Good Night";
  };

  return (
    <div className="container">
      <div className="clock-card">
        <h2>Digital Clock</h2>

        <p className="greeting">{greeting()}</p>

        <h1>{time.toLocaleTimeString()}</h1>

        <h3>
          {time.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </h3>
      </div>
    </div>
  );
}

export default App;
