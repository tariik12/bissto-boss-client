import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img from '../../assets/menu/banner3.jpg'
import dessert from '../../assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'
import soup from '../../assets/menu/soup-bg.jpg'
import { UseMenu } from "../../Hooks/UseMenu";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";



const PageMenu = () => {
    const [menu] = UseMenu()

    const dessertItems = menu.filter(items =>items.category ==='dessert')
    const offeredItems = menu.filter(items =>items.category ==='offered')
    // const drinksItems = menu.filter(items =>items.category ==='drinks')
    const pizzaItems = menu.filter(items =>items.category ==='pizza')
    const soupItems = menu.filter(items =>items.category ==='soup')
    const saladItems = menu.filter(items =>items.category ==='salad')
    return (
        <div >
            <Helmet>
                <title>Bistto Boss | menu</title>    
            </Helmet>
            {/* offered */}
             <Cover img={img} title={'OUR MENU'} subTitle={'Would You like to Try a Dish ?'}></Cover>
             {/* main cover */}
             <SectionTitle title={'Todays offer'} subTitle={'Do not miss'}></SectionTitle>
             {/* offered menu items */}
             <MenuCategory items={offeredItems}></MenuCategory>
             {/* dessert menu items */}
            
            <MenuCategory items={dessertItems} title={'Dessert'} img={dessert}> </MenuCategory>
            <MenuCategory items={saladItems} title={'salad'} img={salad}> </MenuCategory>
            <MenuCategory items={pizzaItems} title={'pizza'} img={pizza}> </MenuCategory>
            <MenuCategory items={soupItems} title={'soup'} img={soup}> </MenuCategory>
        </div>

        
    );
};

export default PageMenu;