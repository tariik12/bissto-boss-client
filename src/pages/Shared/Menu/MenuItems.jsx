
const MenuItems = ({items}) => {
    const {image,name,recipe,price} =items;
  
    return (
        <div className="flex space-x-2   ">
           
                <img src={image} className="w-16 h-16" style={{borderRadius:"0 200px 200px 200px"}} alt="" />
            <div>
                <h4 className="uppercase text-xl">{name}----------------</h4>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-300">${price}</p>
        </div>
    );
};

export default MenuItems;