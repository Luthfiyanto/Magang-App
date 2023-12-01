import { useContext, useState } from "react";
import Card from "./Card";
import { FilterContext } from "./context/FilterMitra";
// import data from "./../data/magang_data.json";

function ListMitra() {
  const { mitra, getAllMitra } = useContext(FilterContext);
  // getAllMitra();
  console.log(mitra);

  // Pagination
  const itemsPerPage = 60;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mitra.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(mitra.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Return
  return (
    <>
      <div className="grid grid-cols-3">
        {currentItems.map((item, index) => (
          <Card key={index} data_magang={item} />
        ))}
      </div>

      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={{ page }} onClick={() => handlePageChange(page)} className="m-2 w-10 p-2 text-blue-800 border border-blue-800 rounded-md">
            {page}
          </button>
        ))}
      </div>
    </>
  );
}

export default ListMitra;
