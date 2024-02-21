import { useState } from "react";
import Statistics from "./componants/Statistics/Statistics";
import TableContainer from "./componants/tables/TableContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 w-full h-full flex justify-center items-center flex-col gap-28">
      <TableContainer />
      <Statistics />
    </div>
  );
}

export default App;
