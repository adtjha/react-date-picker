import { useState } from "react";
import { monthDay } from "./monthDay";
import { PickerDate } from "./PickerDate";

export const DatePicker = (props) => {
  const [showPicker, setShowPicker] = useState(true);
  const monthArray = monthDay(props.month, props.year);
  const picker = monthArray.map((e) => (
    <PickerDate date={e} onChange={props.onChange} />
  ));

  const handleClick = () => {
    setShowPicker(showPicker === true ? false : true);
  };

  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="datepicker">
      <div className="date" onClick={handleClick}>
        {props.day}/{props.month}/{props.year}
      </div>
      <div className={showPicker ? "picker" : "picker hide"}>
        <div className="year">
          <div
            className="hand"
            onClick={() => props.onChange(props.year - 1, "y")}
          >
            👈
          </div>
          <div>{props.year}</div>
          <div
            className="hand"
            onClick={() => props.onChange(props.year + 1, "y")}
          >
            👉
          </div>
        </div>
        <div className="year">
          <div
            className="hand"
            onClick={() => props.onChange(props.month !== 1 ? props.month - 1 : 12, "m")}
          >
            👈
          </div>
          <div>{months[props.month - 1]}</div>
          <div
            className="hand"
            onClick={() => props.onChange(props.month !== 12 ? props.month + 1 : 1, "m")}
          >
            👉
          </div>
        </div>
        <div className="calendar">
          {["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"].map((e) => (
            <div className="days">{e}</div>
          ))}
          {picker}
        </div>
      </div>
    </div>
  );
};
