import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

const {data: payment=[]}=useQuery({
queryKey:['payment',user.email],
queryFn: async() =>{
    const res=await axiosSecure .get(`/payment/${user.email}`)
    return res.data
}
})
  return (
    <div>
      <h1>This is the payment history show here{payment.length} </h1>
      <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {
        payment.map((pay,index)=>  <tr key={pay._id} className="bg-base-200">
        <th>{index +1}</th>
        <td>${pay.price}</td>
        <td>{pay.transactionId}</td>
        <td>{pay.status}</td>
        <td>{pay.data}</td>
      </tr> )
      }
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default PaymentHistory;
