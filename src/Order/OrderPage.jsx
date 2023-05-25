import { useState } from 'react';
import order from '../../src/assets/shop/banner2.jpg'
import Cover from '../pages/Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { UseMenu } from '../Hooks/UseMenu';

import OrderTap from './OrderTap/OrderTap';

const OrderPage = () => {
    const [tabIndex, setTabIndex] = useState()
    const [menu] = UseMenu()

    const dessertItems = menu.filter(items =>items.category ==='dessert')
    const drinksItems = menu.filter(items =>items.category ==='drinks')
    // const drinksItems = menu.filter(items =>items.category ==='drinks')
    const pizzaItems = menu.filter(items =>items.category ==='pizza')
    const soupItems = menu.filter(items =>items.category ==='soup')
    const saladItems = menu.filter(items =>items.category ==='salad')
    return (
        <div>
            <Cover img={order} title={'OUR SHOP'} subTitle={'would you finish a dish?'}></Cover>
            <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Dessert</Tab>
    <Tab>Soup</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
      <OrderTap items={saladItems}></OrderTap>
  </TabPanel>
  <TabPanel>
  <OrderTap items={pizzaItems}></OrderTap>
  </TabPanel>
  <TabPanel>
  <OrderTap items={dessertItems}></OrderTap>
  </TabPanel>
  <TabPanel>
  <OrderTap items={soupItems}></OrderTap>
  </TabPanel>
  <TabPanel>
  <OrderTap items={drinksItems}></OrderTap>
  </TabPanel>
</Tabs>
            </div>
        </div>
    );
};

export default OrderPage;