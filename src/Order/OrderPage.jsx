import order from '../../src/assets/shop/banner2.jpg'
import Cover from '../pages/Shared/Cover/Cover';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

CustomTab.tabsRole = 'Tab';

const OrderPage = () => {
    
    return (
        <div>
            <Cover img={order} title={'OUR SHOP'} subTitle={'would you finish a dish?'}></Cover>
            <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
            </div>
        </div>
    );
};

export default OrderPage;