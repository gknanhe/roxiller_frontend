import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import useStore from "../../store/useStore";
// import useGetConversations from "../../hooks/useGetConversations";
import { toast } from "react-hot-toast";
import useSearch from "../../hooks/useSearch";
const Searchbar = () => {
  const [search, setSearch] = useState("");
  const { trasactions } = useStore();
  // const { setSelectedConversation } = useConversation();
  // const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    useSearch(search);
  };

  return (
    <form className="flex items-center gap-2 " onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input border border-cyan-200 outline-cyan-500 input-boardered rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchOutline className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default Searchbar;
