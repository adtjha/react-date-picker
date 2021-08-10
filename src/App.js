import "./App.css";
import { useState } from "react";
import { DatePicker } from "./DatePicker";

function App() {
  const [day, setDay] = useState(10);
  const [month, setMonth] = useState(8);
  const [year, setYear] = useState(2021);

  const handleChange = (e, type) => {
    switch (type) {
      case "d":
        setDay(e);
        return;
      case "m":
        setMonth(e);
        return;
      case "y":
        setYear(e);
        return;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <DatePicker
        day={day}
        month={month}
        year={year}
        onChange={handleChange}
      ></DatePicker>
    </div>
  );
}

export default App;
