import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import SectionTitle from "../Pages/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const image_hosting_key = "0b78de90253620b2ab5045330009a458";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const { register, reset, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItems = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.post("/menu", menuItems);

      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className="p-4 md:p-6">
      {/* 🔹 Section Title */}
      <SectionTitle heading="Add an Item" subHeading="What's new?" />

      {/* 🔹 Form Container */}
      <div className="max-w-4xl mx-auto bg-base-100 shadow rounded-lg p-4 md:p-8 mt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Recipe Name */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Recipe Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Category & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-medium">Category</span>
              </label>
              <select
                {...register("category", { required: true })}
                defaultValue=""
                className="select select-bordered w-full"
              >
                <option disabled value="">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="popular">Popular</option>
                <option value="dessert">Dessert</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="offered">Offered</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                step="0.01"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered w-full min-h-[120px]"
              placeholder="Recipe details"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Food Image</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button className="btn btn-accent w-full md:w-auto">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
