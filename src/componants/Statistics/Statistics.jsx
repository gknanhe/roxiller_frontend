import React from "react";
import useStatistics from "../../hooks/useStatistics";

const Statistics = () => {
  const { stats } = useStatistics();
  return (
    <div className="w-[330px] p-4  text-white font-semibold bg-primary rounded-md">
      <p> Total sale : {stats.totalSaleAmount}</p>
      <p>total sold item: {stats.totalSoldItems}</p>
      <p>Total not sold Item: {stats.totalNotSoldItems}</p>
    </div>
  );
};

export default Statistics;
