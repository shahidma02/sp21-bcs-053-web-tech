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

  const nextPage = () => {
    const nextPageNum = num + 1;
    setNum(nextPageNum);
    handlePagination(nextPageNum);

    // Update URL with the page parameter
    navigate(`/dashboard/?page=${nextPageNum}`);
  };

  const prevPage = () => {
    if (num > 1) {
      const prevPageNum = num - 1;
      setNum(prevPageNum);
      handlePagination(prevPageNum);

      // Update URL with the page parameter
      navigate(`/dashboard/?page=${prevPageNum}`);
    }
  };

  const goToPage = (page) => {
    setCur(page);
    handlePagination(page);

    // Update URL with the page parameter
    navigate(`/dashboard/?page=${page}`);
  };

  return (
    <div className="flex justify-center items-center mt-4 bg-white rounded-lg font-[Poppins]">
      {/* <button
        onClick={prevPage}
        className="h-12 px-4 rounded-l-lg text-pink-500 font-extrabold hover:text-pink-700"
      >
        &lt;
      </button> */}
      {pages.map((pg, i) => (
        <button
          key={i}
          onClick={() => goToPage(pg.page)}
          className={`h-12 text-pink-400 font-extrabold hover:text-pink-500 w-12 ${
            cur === pg.page && "border-2 rounded-full border-pink-500 text-white"
          }`}
        >
          {pg.page}
        </button>
      ))}
      {/* <button
        onClick={nextPage}
        className="h-12 border-2 border-black px-4 rounded-r-lg hover:bg-black hover:text-white"
      >
        &gt;
      </button> */}
    </div>
  );
};

export default Pagination