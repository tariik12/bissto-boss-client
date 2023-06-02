
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {

  const location = useLocation()

  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('login');
    return (
        <div>
         {noHeaderFooter || <Navbar></Navbar>} 
          <Outlet></Outlet> 
          {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;