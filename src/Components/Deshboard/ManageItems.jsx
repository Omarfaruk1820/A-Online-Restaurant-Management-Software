import Swal from "sweetalert2";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../Pages/SectionTitle";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  // 🗑️ Delete item
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} deleted successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      }
    });
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* 🔹 Title */}
      <SectionTitle subHeading="Hurry Up" heading="Manage Items" />

      {/* ================= DESKTOP / TABLET TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th className="text-center">Update</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>

                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>

                <td className="font-medium">{item.name}</td>
                <td>${item.price}</td>

                <td className="text-center">
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn btn-xs btn-outline btn-info">
                      <FaEdit />
                    </button>
                  </Link>
                </td>

                <td className="text-center">
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-xs btn-outline btn-error"
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARD VIEW ================= */}
      <div className="md:hidden space-y-4">
        {menu.map((item, index) => (
          <div
            key={item._id}
            className="card bg-base-100 shadow border"
          >
            <div className="card-body p-4 space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">
                    {index + 1}. {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Price: ${item.price}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Link
                  to={`/dashboard/updateItem/${item._id}`}
                  className="btn btn-sm btn-info flex-1"
                >
                  <FaEdit /> Edit
                </Link>

                <button
                  onClick={() => handleDeleteItem(item)}
                  className="btn btn-sm btn-error flex-1"
                >
                  <FaRegTrashAlt /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
