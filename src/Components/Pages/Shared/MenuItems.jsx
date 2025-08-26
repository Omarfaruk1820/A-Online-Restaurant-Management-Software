const MenuItems = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="md:flex items-center card group  rounded-lg overflow-hidden   gap-1">
     <div className=" ">
         <div className="ml-12 ">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="md:w-32 h-20 transition-transform duration-500 group-hover:scale-110 "
          src={image}
          alt=""
        />
      </div>
      {/* shadow-xs card-hover */}
     </div>

      <div className="justify-center text-wrap items-center">
        <div className="">
          <p className="">{name}--</p>
          <p className="   text-glow color-foreground text-wrap ">{recipe}</p>
        </div>
        <p className="text-yellow-400 text-center">${price}</p>
      </div>
    </div>
  );
};

export default MenuItems;
