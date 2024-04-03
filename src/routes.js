import CardProduct from "./Components/Pages/card";
import PageIphone from "./Components/Pages/iphone";
import Macbook from "./Components/Pages/macbook";
import NotFound from "./Components/Pages/notFound";
import Total from "./Components/Pages/totalProduct";
import Detail from "./Components/Pages/detail";
const routes = [
    {
        path: '/',
        element: <CardProduct />,
        name: 'Home'
    },

    {
        path: '/Iphone',
        element: <PageIphone />,
        name: 'Iphone',
    },

    {
        path: '/Macbook',
        element: <Macbook />,
        name: 'Macbook'
    },

    {
        path: '/Card',
        element: <Total />,
        name: 'Card'
    },

    {
        path: '/Detail',
        element: <Detail />,
        name: 'Detail'
    }
    ,
    {
        path: '*',
        element: <NotFound />
    }
]

export default routes;