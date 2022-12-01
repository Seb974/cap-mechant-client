import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";

const CustomPagination = ({ currentPage, setCurrentPage, totalPages}) => {
  const handleClick = (toPage) => {
    setCurrentPage(toPage);
  };
  return (
    <>
      <div>
        <br />
        <Pagination size="sm">
          <Pagination.First onClick={(event) => handleClick(1)} />
          {currentPage - 1 >= 1 && (
            <Pagination.Prev
              onClick={(event) => handleClick(currentPage - 1)}
            />
          )}
          {currentPage - 1 > 1 && <Pagination.Ellipsis />}
          {currentPage - 1 >= 1 && (
            <Pagination.Item onClick={(event) => handleClick(currentPage - 1)}>
              {currentPage - 1}
            </Pagination.Item>
          )}
          <Pagination.Item active>{currentPage}</Pagination.Item>
          {currentPage + 1 <= totalPages && (
            <Pagination.Item onClick={(event) => handleClick(currentPage + 1)}>
              {currentPage + 1}
            </Pagination.Item>
          )}
          {currentPage + 1 < totalPages && <Pagination.Ellipsis />}
          {currentPage + 1 <= totalPages && (
            <Pagination.Next
              onClick={(event) => handleClick(currentPage + 1)}
            />
          )}
          <Pagination.Last onClick={(event) => handleClick(totalPages)} />
        </Pagination>
      </div>
    </>
  );
};

export default CustomPagination;
