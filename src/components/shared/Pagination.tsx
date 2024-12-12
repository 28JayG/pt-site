import { useState } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

interface Props {
  count: number;
  onPageChange?: (page: number) => void;
  rowPerPage: number;
}

const Pagination: React.FC<Props> = ({ count, onPageChange, rowPerPage }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageSelect = (page: number) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => {
      const nextPage = Math.min(totalPages, prev + 1);
      onPageChange?.(nextPage);

      return nextPage;
    });
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => {
      const nextPage = Math.max(0, prev - 1);
      onPageChange?.(nextPage);

      return nextPage;
    });
  };

  const totalPages = count / rowPerPage;

  return (
    <div className="flex gap-4 items-center mb-20">
      {totalPages > 5 && (
        <IoArrowBackCircleOutline
          size={25}
          onClick={handlePreviousPage}
          className="text-green-500 cursor-pointer"
        />
      )}
      {Array(totalPages)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className={`p-2 text-center rounded-full w-10 font-semibold cursor-pointer ${
              currentPage === index
                ? "bg-green-500 text-white"
                : "bg-white text-green-500"
            }`}
            onClick={() => handlePageSelect(index)}
          >
            {(index + 1).toString().padStart(2, "0")}
          </div>
        ))}
      {totalPages > 5 && (
        <IoArrowForwardCircleOutline
          onClick={handleNextPage}
          size={25}
          className="text-green-500 cursor-pointer"
        />
      )}
    </div>
  );
};


export default Pagination
