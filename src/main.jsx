import ReactDOM from 'react-dom/client'
import './index.css'
import {  HelmetProvider } from 'react-helmet-async';
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>

 <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
 </div>
  </HelmetProvider>
)
