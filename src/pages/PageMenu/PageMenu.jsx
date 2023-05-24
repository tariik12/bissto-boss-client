import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img from '../../assets/menu/banner3.jpg'
import dessert from '../../assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'
import soup from '../../assets/menu/soup-bg.jpg'
import { UseMenu } from "../../Hooks/UseMenu";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import MenuItems from "../Shared/Menu/MenuItems";



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
             <SectionTitle title={'Todays offer'} subTitle={'Do not miss'}></SectionTitle>
             <div className="grid grid-cols-2">
             {
                offeredItems.map((items,index) =><MenuItems key={index}items={items}></MenuItems>)
             }
             </div>
             <div className=" text-center my-5">
             <button className="btn  btn-outline">ORDER YOUR FAVOURITE FOOD</button>
             </div>
             {/* dessert */}
             <Cover img={dessert} title={'dessert'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>

             <div className="grid grid-cols-2">
             {
                dessertItems.map((items,index) =><MenuItems key={index}items={items}></MenuItems>)
             }
             </div>
              <div className=" text-center my-5">
             <button className="btn  btn-outline">ORDER YOUR FAVOURITE FOOD</button>
             </div>
             {/* pizza */}
             <Cover img={pizza} title={'pizza'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
             <div className="grid grid-cols-2">
             {
               pizzaItems.map((items,index) =><MenuItems key={index}items={items}></MenuItems>)
             }
             </div>
              <div className=" text-center my-5">
             <button className="btn  btn-outline">ORDER YOUR FAVOURITE FOOD</button>
             </div>

             {/* soupItems */}
             <Cover img={salad} title={'salad'}  subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
             <div className="grid grid-cols-2">
             {
                saladItems.map((items,index) =><MenuItems key={index}items={items}></MenuItems>)
             }
             </div>
             <div className=" text-center my-5">
             <button className="btn  btn-outline">ORDER YOUR FAVOURITE FOOD</button>
             </div>

             {/* saladItems */}
             <Cover img={soup} title={'soup'}  subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
             <div className="grid grid-cols-2">
             {
                soupItems.map((items,index) =><MenuItems key={index}items={items}></MenuItems>)
             }
             </div>
             <div className=" text-center my-5">
             <button className="btn  btn-outline">ORDER YOUR FAVOURITE FOOD</button>
             </div>
        </div>

        
    );
};

export default PageMenu;