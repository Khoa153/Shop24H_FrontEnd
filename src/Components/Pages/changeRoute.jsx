import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '../../routes';
import Bread from './breadcrumbs';
const ChangeRoute = () => {
    return (
        <div>
           
            <Routes>
                {
                    routes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.element} />
                    })
                }
            </Routes>
        </div>
    )
}

export default ChangeRoute