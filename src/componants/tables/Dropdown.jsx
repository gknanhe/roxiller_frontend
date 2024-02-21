import React from "react";
import useStore from "../../store/useStore";

const Dropdown = () => {
  const { selectedMonth, setSelectedMonth } = useStore();

  return (
    <div>
      <select
        className="select select-primary w-full max-w-xs"
        value={selectedMonth} // Set the value attribute to manage the selected value
        onChange={(e) => {
          setSelectedMonth(parseInt(e.target.value));
          console.log(e.target.value);
        }}
      >
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {" "}
            {/* Add value attribute */}
            {month.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

const months = [
  { name: "January", value: 1 },
  { name: "February", value: 2 },
  { name: "March", value: 3 },
  { name: "April", value: 4 },
  { name: "May", value: 5 },
  { name: "June", value: 6 },
  { name: "July", value: 7 },
  { name: "August", value: 8 },
  { name: "September", value: 9 },
  { name: "October", value: 10 },
  { name: "November", value: 11 },
  { name: "December", value: 12 },
];
