import React, { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const paginateData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = (data) => Math.ceil(data.length / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (page) => setCurrentPage(page);

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        itemsPerPage,
        paginateData,
        totalPages,
        nextPage,
        prevPage,
        goToPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => useContext(PaginationContext);
