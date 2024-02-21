import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import useStore from "../store/useStore";

const useGetTabledata = () => {
  const { selectedMonth, selectedPage, transactions, setTransactions } =
    useStore();
  console.log("inside fetch");
  useEffect(() => {
    const getTableData = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/transactions/stat-trasactions?month=${selectedMonth}&page=${selectedPage}`
        );

        if (!res.ok) {
          throw new Error({ message: "Failed to fetch data" });
        }
        const data = await res.json();

        setTransactions(data);
        console.log("data", data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getTableData();
  }, [selectedMonth]);

  return transactions;
};

export default useGetTabledata;
