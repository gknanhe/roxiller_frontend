import React from "react";
import { toast } from "react-hot-toast";

const useSearch = async ({ search }) => {
  try {
    const res = await fetch(
      `https://roxiller-backend-snya.onrender.com/api/transations/search?search=${search}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch search results");
    }
    const data = await res.json();
    setSearchResults(data);
  } catch (error) {
    toast.error(error.message);
  }
};

export default useSearch;
