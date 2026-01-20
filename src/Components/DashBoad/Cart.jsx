import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  // 🗑️ Delete cart item
  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Item removed.", "success");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* 🔹 Cart Summary */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-xl md:text-3xl font-bold">
          Order Items: {cart.length}
        </h2>

        <h2 className="text-xl md:text-3xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </h2>

        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-accent w-full md:w-auto">
              Pay Now
            </button>
          </Link>
        ) : (
          <button disabled className="btn btn-accent w-full md:w-auto">
            Pay Now
          </button>
        )}
      </div>

      {/* ================= DESKTOP / TABLET TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Item Name</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
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
                  <button
                    onClick={() => handleDeleteItem(item._id)}
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
        {cart.map((item, index) => (
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

              <button
                onClick={() => handleDeleteItem(item._id)}
                className="btn btn-sm btn-error w-full"
              >
                <FaRegTrashAlt /> Remove Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
