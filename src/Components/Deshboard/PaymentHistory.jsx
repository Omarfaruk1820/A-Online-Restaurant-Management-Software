import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/payment/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
        Payment History
      </h1>

      {payments.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No payment history found.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full border border-gray-200">
            <thead className="bg-primary text-white">
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Price</th>
                <th className="text-center">Transaction ID</th>
                <th className="text-center">Status</th>
                <th className="text-center">Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((pay, index) => (
                <tr
                  key={pay._id}
                  className="bg-base-100 hover:bg-base-200 transition-colors duration-200"
                >
                  <th className="text-center">{index + 1}</th>
                  <td className="text-center font-medium text-green-600">
                    ${pay.price.toFixed(2)}
                  </td>
                  <td className="text-center text-blue-600 font-semibold">
                    {pay.transactionId}
                  </td>
                  <td
                    className={`text-center font-semibold ${
                      pay.status === "pending"
                        ? "text-yellow-500"
                        : pay.status === "completed"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {pay.status}
                  </td>
                  <td className="text-center text-gray-600">
                    {new Date(pay.data).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
