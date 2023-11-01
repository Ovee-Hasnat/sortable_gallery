/* eslint-disable react/prop-types */
import { AiFillWarning } from "react-icons/ai";

const DeletePopup = ({ open, del }) => {
  return (
    <div className="w-screen h-screen bg-black/70 fixed z-50 top-0 left-0 backdrop-blur-sm flexCenter">
      <div className="h-72 w-3/4 max-w-md bg-white rounded-lg p-4 flexCenter flex-col gap-4 animate__animated animate__bounceIn">
        <AiFillWarning size={80} className="text-yellow-400" />
        <h2 className="text-lg font-semibold text-center">
          Are you sure you want to delete selected product(s)?
        </h2>

        <div className="flex gap-6">
          <button
            className="btn_basic bg-black text-white font-semibold"
            onClick={() => open(false)}
          >
            No
          </button>
          <button
            className="btn_basic bg-red-800 text-white font-semibold"
            onClick={() => {
              del();
              open(false);
            }}
          >
            Yes, Delete it.
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
