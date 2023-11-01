import { BiSelectMultiple } from "react-icons/bi";
import Gallery_main from "./Gallery_main";
import { useState } from "react";
import { products } from "../data/data";
import DeletePopup from "./DeletePopup";
import toast, { Toaster } from "react-hot-toast";

const Layout = () => {
  const [productList, setProductList] = useState(products);
  const [select, setselect] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);

  const notify = () => toast.success(`${select.length} item(s) deleted.`);

  const deleteProduct = () => {
    select.map((selectedProduct) => {
      productList.splice(productList.indexOf(selectedProduct), 1);
    });
    notify();
    setselect([]);
  };

  return (
    <div className="border max-w-6xl mx-auto rounded-lg shadow-md relative">
      {/* Confirm Delete Modal */}
      {deleteModal && <DeletePopup open={setDeleteModal} del={deleteProduct} />}

      <Toaster position="top-right" />

      {/* Gallery Top */}
      <div className="font-semibold h-14 p-3 border-b-2 shadow-sm flex items-center sticky">
        <h2
          className={
            select.length > 0
              ? "hidden"
              : "block text-xl animate__animated animate__fadeInRight"
          }
        >
          Gallery
        </h2>

        {/* gallery top section when selected */}
        <div
          className={
            select.length > 0
              ? "flex items-center justify-between w-full animate__animated animate__fadeIn"
              : "hidden"
          }
        >
          <div className="flexCenter gap-1">
            <BiSelectMultiple size={20} onClick={() => setselect([])} />
            <p>{select.length} Items selected</p>
          </div>
          <button
            className="text-white bg-red-800 btn_basic hover:bg-red-700 easy"
            onClick={() => setDeleteModal(true)}
          >
            Delete Files
          </button>
        </div>
      </div>

      {/* Main Gallery */}
      <div className="max-h-[700px] overflow-auto py-4 px-2 md:p-4">
        <Gallery_main
          select={select}
          setselect={setselect}
          products={productList}
          setProducts={setProductList}
        />
      </div>
    </div>
  );
};

export default Layout;
