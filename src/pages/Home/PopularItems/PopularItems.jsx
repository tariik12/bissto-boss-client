import { useEffect, useState } from "react";
import MenuItems from "../../Shared/Menu/MenuItems";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const PopularItems = () => {
    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res =>res.json())
        .then(data =>{
            const popularMenu = data.filter(items =>items.category ==='popular')
            setMenu(popularMenu)
        })
    },[])
    return (
        <section>
            <SectionTitle 
            subTitle={'Check It out'}
            title={'form our menu'}
            ></SectionTitle>
          <div className="grid md:grid-cols-2 gap-4">
          {
                menu?.map((items,index) =><MenuItems key={index} items={items}></MenuItems>)
            }
          </div>
        </section>
    );
};

export default PopularItems;