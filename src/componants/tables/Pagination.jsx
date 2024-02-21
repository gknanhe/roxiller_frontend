import React from "react";
import useNext from "../../hooks/useNext";
import useStore from "../../store/useStore";

const Pagination = () => {
  const { selectedPage, transactions, setSelectedPage } = useStore();

  const handleNext = (e) => {
    e.preventDefault();
    setSelectedPage(selectedPage + 1);
  };
  useNext();

  return (
    <div>
      <div className="join grid grid-cols-2">
        <button
          className="join-item btn btn-outline"
          disabled={selectedPage === 1} // Disable if on the first page
        >
          Previous page
        </button>
        <button
          className="join-item btn btn-outline"
          onClick={handleNext}
          disabled={selectedPage >= transactions.totalPages} // Disable if on the last page
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
