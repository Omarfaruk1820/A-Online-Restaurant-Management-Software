

const MenuItems = ({item}) => {
    const {name,recipe,image,price}=item
    return (
       
         <div className='flex gap-3'>
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-24 " src={image} alt="" />
            <div>
                <p className='uppercase'>{name}---------</p>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-400'>${price}</p>
        </div>
    );
};

export default MenuItems;