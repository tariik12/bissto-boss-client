import ReactDOM from 'react-dom/client'
import './index.css'
import {  HelmetProvider } from 'react-helmet-async';
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route.jsx';
import AuthProvider from './Provider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
 </div>
    </QueryClientProvider>

  </HelmetProvider>
  </AuthProvider>
)
