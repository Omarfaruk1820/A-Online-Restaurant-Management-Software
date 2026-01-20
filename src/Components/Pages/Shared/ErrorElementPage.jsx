import { Link, useRouteError } from "react-router-dom";
// import errorlogo from "../assets/error.png"; // update path if needed
// import errorlogo from "../../assets/brands/404.gif"
import errorLogo from "../../../assets/assets/contact/404.gif"

const ErrorElementPage = () => {
  const error = useRouteError();
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-4xl w-full bg-base-100 shadow-xl rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            className="h-full w-full max-h-80 object-contain"
            src={errorLogo}
            alt="Error"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-5xl font-bold text-error">
            {error?.status || "404"}
          </h1>

          <h2 className="text-2xl font-semibold">
            Oops! Page not found
          </h2>

          <p className="text-gray-500">
            {error?.statusText ||
              error?.message ||
              "The page you are looking for doesn’t exist or an unexpected error occurred."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Link to="/" className="btn text-black btn-primary">
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn btn-outline"
            >
              Go Back
            </button>
          </div>
        </div>

      </div>
    </div>
    );
};

export default ErrorElementPage;