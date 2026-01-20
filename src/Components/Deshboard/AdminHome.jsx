import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUser } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

// 🔺 Triangle bar shape
const getPath = (x, y, width, height) => {
  return `
    M${x},${y + height}
    C${x + width / 3},${y + height}
     ${x + width / 2},${y + height / 3}
     ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
     ${x + (2 * width) / 3},${y + height}
     ${x + width},${y + height}
    Z
  `;
};

const TriangleBar = ({ fill, x, y, width, height }) => {
  return <path d={getPath(x, y, width, height)} fill={fill} />;
};

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // 📊 Admin stats
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  // 📈 Chart data
  const { data: chartDatas = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* 👋 Welcome */}
      <h2 className="text-xl md:text-2xl font-bold">
        Welcome, {user?.displayName || "Admin"}
      </h2>

      {/* 📦 Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat shadow rounded-lg">
          <div className="stat-figure text-primary text-2xl">
            <FaDollarSign />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats.revenue || 0}</div>
          <div className="stat-desc">All time</div>
        </div>

        <div className="stat shadow rounded-lg">
          <div className="stat-figure text-secondary text-2xl">
            <FaUser />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users || 0}</div>
          <div className="stat-desc">Registered users</div>
        </div>

        <div className="stat shadow rounded-lg">
          <div className="stat-figure text-accent text-2xl">
            <FaBook />
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItems || 0}</div>
          <div className="stat-desc">Total items</div>
        </div>

        <div className="stat shadow rounded-lg">
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders || 0}</div>
          <div className="stat-desc">Total orders</div>
        </div>
      </div>

      {/* 📊 Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-base-100 shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Order Quantity by Category</h3>

          {/* ✅ Responsive chart */}
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartDatas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Bar
                  dataKey="quantity"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {chartDatas.map((_, index) => (
                    <Cell key={index} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 🧩 Extra Panel (optional) */}
        <div className="bg-base-100 shadow rounded-lg p-4 flex items-center justify-center">
          <p className="text-gray-500">More analytics coming soon 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
