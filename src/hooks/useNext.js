import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Transaction from "../../../backend/models/transaction";
import useStore from "../store/useStore";

const useNext = () => {
  const { selectedMonth, transactions, selectedPage, setTransactions } =
    useStore();

  useEffect(() => {
    const getNext = async () => {
      try {
        console.log("inside next");
        const res = await fetch(
          `https://roxiller-backend-snya.onrender.com/api/transactions/month?month=${selectedMonth}&page=${selectedPage}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setTransactions(data);
        console.log("data", data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getNext();
  }, [selectedPage]);

  return transactions;
};

export default useNext;
