const MenuItems = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card card-side bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 flex-col sm:flex-row">
      {/* 🖼️ Image */}
      <figure className="p-4 flex justify-center sm:justify-start">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full
                     transition-transform duration-500 hover:scale-110"
        />
      </figure>

      {/* 📄 Content */}
      <div className="card-body p-4 pt-0 sm:pt-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">
              {recipe}
            </p>
          </div>

          {/* 💰 Price */}
          <span className="badge badge-warning badge-lg self-start">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
