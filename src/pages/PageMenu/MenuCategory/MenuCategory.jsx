import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/Menu/MenuItems";


const MenuCategory = ({items,title,img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} ></Cover>}
            <div className="grid grid-cols-2 gap-10 mt-16">
             {
                items.map((items,index) =><MenuItems key={index}items={items}></MenuItems>)
             }
             </div>
             <div className=" text-center my-5">
             <Link to={`/order/${title}`}>
             <button className="btn  btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD</button>
             </Link>
             </div>
        </div>
    );
};

export default MenuCategory;