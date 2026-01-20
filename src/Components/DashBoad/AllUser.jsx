import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  // 👑 Make Admin
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is now an Admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // 🗑️ Delete User
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "User has been removed.", "success");
            refetch();
          }
        });
      }
    });
  };

  if (isLoading) {
    return <div className="text-center mt-10">Loading users...</div>;
  }

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* 🔹 Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <h2 className="text-xl md:text-2xl font-bold">All Users</h2>
        <p className="badge badge-primary badge-lg">
          Total Users: {users.length}
        </p>
      </div>

      {/* ================= DESKTOP & TABLET TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td className="font-medium">{user.name}</td>
                <td className="text-sm">{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <span className="badge badge-success">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-xs btn-outline btn-warning"
                    >
                      <FaUsers /> Make Admin
                    </button>
                  )}
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-xs btn-outline btn-error"
                  >
                    <MdDeleteForever className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARD VIEW ================= */}
      <div className="md:hidden space-y-4">
        {users.map((user, index) => (
          <div
            key={user._id}
            className="card bg-base-100 shadow-md border"
          >
            <div className="card-body p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">
                  {index + 1}. {user.name}
                </h3>
                {user.role === "admin" && (
                  <span className="badge badge-success">Admin</span>
                )}
              </div>

              <p className="text-sm text-gray-500 break-all">
                {user.email}
              </p>

              <div className="flex gap-2 pt-2">
                {user.role !== "admin" && (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-sm btn-warning flex-1"
                  >
                    <FaUsers /> Admin
                  </button>
                )}
                <button
                  onClick={() => handleDeleteUser(user)}
                  className="btn btn-sm btn-error flex-1"
                >
                  <MdDeleteForever /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUser;
