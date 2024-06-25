import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Prodact from "./Prodact";
import { useSelector } from "react-redux";

const Pagenation = ({ itemsPerPage }) => {
  let productDeta = useSelector((state) => state.allproduct.product);
  const items = productDeta;
  function Items({ currentItems }) {
    return (
      <div className=" flex pt-5 flex-wrap justify-between lg:flex-row flex-col items-center sm:flex-row ">
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <Prodact
              productDetails={item}
                id={item.id}
                imageurl={item.thumbnail}
                prize={`$ ${Math.floor(
                  item.price - (item.discountPercentage / 100) * item.price
                )}`}
                cross={`$ ${Math.floor(item.price)}`}
                name={item.title}
                offer={`${Math.floor(item.discountPercentage)} %`}
                rating={item.rating}
              />
            </div>
          ))}
      </div>
    );
  }
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className="flex mt-10"
        pageClassName="bg-black text-white px-6 py-2 ml-2"
      />
    </>
  );
};

export default Pagenation;
