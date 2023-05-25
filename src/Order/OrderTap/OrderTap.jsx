import FoodCard from "../../pages/components/SectionTitle/FoodCard/FoodCard";


const OrderTap = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          items.map((item,index) =><FoodCard 
          key={index}
          item={item}>
          </FoodCard>)
        }
      </div>
    );
};

export default OrderTap;