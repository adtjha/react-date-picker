import { useRef } from "react";


export const PickerDate = (props) => {
  const date = useRef(null);
  const handleChange = () => {
    props.onChange(date.current.innerText, "d");
  };

  return (
    <div className="pickerDate" ref={date} onClick={handleChange}>
      {props.date}
    </div>
  );
};
