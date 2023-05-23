
const MenuItems = ({items}) => {
    const {image,name,recipe,price} =items;
    console.log(image)
    return (
        <div className="flex space-x-2 text-white bg-gradient-to-r via-fuchsia-600 from-indigo-500 ">
           
            <div>
                <h4 className="uppercase text-xl">{name}----------------</h4>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-300">{price}</p>
        </div>
    );
};

export default MenuItems;