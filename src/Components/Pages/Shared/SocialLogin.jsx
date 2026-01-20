import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { siginInwithGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSigninGoogle = () =>
    siginInwithGoogle()
      .then((result) => {
        console.log(result.user, "Google login successful");

        const userinfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };

        axiosPublic.post("/user", userinfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
      });

  return (
    <div className="w-full max-w-md mx-auto mt-6 px-4">
      <button
        onClick={handleSigninGoogle}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 text-lg sm:text-xl font-medium border-2 border-gray-300 rounded-lg hover:bg-red-500 hover:text-white transition duration-300"
      >
        <FaGoogle className="text-2xl sm:text-3xl" />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
