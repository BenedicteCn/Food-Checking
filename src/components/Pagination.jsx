import React from "react";
import "./Pagination.css";
import ReactPaginate from "react-paginate";


function Pagination( { setPageNumber, products  }) {
  const productsPerPage = 8
  const pageCount = Math.ceil(products.length / productsPerPage)
  const changePage = ({selected}) => {
    setPageNumber(selected)
  } 

  return (
      <div className="pagination">
      <ReactPaginate 
          previousLabel={"Précédent"}
          nextLabel={"Suivant"}
          pageCount={pageCount}
          onPageChange={changePage}
        />
      </div>
  );
}

export default Pagination;
