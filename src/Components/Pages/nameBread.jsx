import Bread from "./breadcrumbs";
import routes from "../../routes";
import { Breadcrumb } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Switch } from "@mui/material";

const NameBread = () => {
    return (
        <div>
            
            <Routes>
                {
                    routes.map((route, index) => {

                        return <Route key={index} path={route.path} exact>
                            <h4>{route.name}</h4>
                        </Route>
                    })
                }
                
            </Routes>
        </div>
    )
}

export default NameBread