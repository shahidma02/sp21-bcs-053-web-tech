import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pagination = ({ handlePagination, currentPage}) => {
  const [num, setNum] = useState(1);
  const [cur, setCur] = useState(currentPage || 1);
  const navigate = useNavigate();

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];

  

  const goToPage = (page) => {
    setCur(page);
    handlePagination(page);

    // Update URL with the page parameter
    navigate(`/dashboard/?page=${page}`);
  };

  return (
    <div className="flex justify-center items-center mt-4 bg-white rounded-lg font-[Poppins]">
      
      {pages.map((pg, i) => (
        <button
          key={i}
          onClick={() => goToPage(pg.page)}
          className={`h-12 text-pink-400 font-extrabold hover:text-pink-500 w-12 ${
            cur === pg.page && "border-2 rounded-full border-pink-500 "
          }`}
        >
          {pg.page}
        </button>
      ))}
      
    </div>
  );
};

export default Pagination