/* eslint-disable react/prop-types */
import { useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Gallery_main = ({ select, setselect, products, setProducts }) => {
  // const [productList, setProductList] = useState(products);
  const dragProduct = useRef(0);
  const draggedOverProduct = useRef(0);

  function handleSort() {
    const productListClone = [...products];

    const temp = productListClone[dragProduct.current];

    productListClone[dragProduct.current] =
      productListClone[draggedOverProduct.current];

    productListClone[draggedOverProduct.current] = temp;

    setProducts(productListClone);
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gallery_grid">
        {products?.map((product, i) => (
          <div
            className={`relative flexCenter text-2xl font-bold easy overflow-hidden border-2 rounded-md group cursor-pointer ${
              select.includes(product) ? "border-blue-800 opacity-40" : null
            }`}
            key={i}
            onClick={() => {
              if (select.includes(product)) {
                select.splice(select.indexOf(product), 1);
                setselect([...select]);
              } else {
                setselect([...select, product]);
              }
            }}
            draggable
            onDragStart={() => (dragProduct.current = i)}
            onDragEnter={() => (draggedOverProduct.current = i)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <img
              src={`/img/${product.image}`}
              className={`object-cover group-hover:scale-110 easy ${
                select.includes(product) ? "scale-110" : null
              }`}
            />
          </div>
        ))}

        {/* Upload Button */}
        <div className="min-h-[130px] flexCenter flex-col text-lg font-medium text-neutral-700 border-2 border-dashed rounded-md">
          <AiOutlineCloudUpload size={30} />
          <p>Upload Files</p>
        </div>
      </div>
    </>
  );
};

export default Gallery_main;
