
import MenuItems from "../../Shared/Menu/MenuItems";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { UseMenu } from "../../../Hooks/UseMenu";



const PopularItems = () => {
  
    const [menu] = UseMenu()

    const popularMenu = menu.filter(items =>items.category ==='popular')
    return (
        <section>
            <SectionTitle 
            subTitle={'Check It out'}
            title={'form our menu'}
            ></SectionTitle>
          <div className="grid md:grid-cols-2 gap-4">
          {
                popularMenu?.map((items,index) =><MenuItems key={index} items={items}></MenuItems>)
            }
          </div>
        </section>
    );
};

export default PopularItems;