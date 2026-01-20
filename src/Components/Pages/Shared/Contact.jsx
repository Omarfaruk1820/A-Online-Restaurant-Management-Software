import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-base-200 py-16 px-4 min-h-screen">
      <div className="max-w-7xl mt-10 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Contact Us</h2>
          <p className="text-gray-500 mt-3">
            We are available for online orders & customer support
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body flex flex-row items-center gap-4">
                <FaPhoneAlt className="text-3xl text-primary" />
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-gray-500">+880 1822637989</p>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-md">
              <div className="card-body flex flex-row items-center gap-4">
                <FaEnvelope className="text-3xl text-primary" />
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-500">Smart Kitchen@restaurant.com</p>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-md">
              <div className="card-body flex flex-row items-center gap-4">
                <FaMapMarkerAlt className="text-3xl text-primary" />
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-gray-500">
                    Dhaka, Bangladesh <br /> Open 10:00 AM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-bold mb-4">Send Message</h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  required
                />

                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full h-32"
                  required
                ></textarea>

                <button className="btn btn-primary w-full flex items-center justify-center gap-2">
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
