import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Products from '../Pages/Products';
import AddProduct from '../Pages/AddProduct';
import Product from '../Pages/Product';

export const routeConfig = 
[
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/products',
        element:<Products />
    },
    {
        path:'/addproduct',
        element:<AddProduct />
    },
    {
        path:'/product/:id',
        element:<Product />
    },
]