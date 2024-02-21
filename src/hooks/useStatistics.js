import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useStore from "../store/useStore";
const useStatistics = () => {
  const [stats, setStats] = useState("");
  const { selectedMonth, selectedPage, transactions, setTransactions } =
    useStore();
  useEffect(() => {
    const getSatistics = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/transactions/stat-trasactions?month=${selectedMonth}&page=${selectedPage}`
        );

        if (!res.ok) {
          throw new Error({ message: "Failed to fetch data" });
        }
        const data = await res.json();

        setStats(data);
        console.log("statistic data", data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getSatistics();
  }, [selectedMonth]);
  console.log("stats", stats);
  return { stats };
};

export default useStatistics;
