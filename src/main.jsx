import ReactDOM from 'react-dom/client'
import './index.css'
import {  HelmetProvider } from 'react-helmet-async';
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route.jsx';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HelmetProvider>
 <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
 </div>
  </HelmetProvider>
  </AuthProvider>
)
