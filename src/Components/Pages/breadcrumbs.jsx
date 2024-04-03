import React from 'react';
import { Link, useLocation, useSearchParams, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import routes from '../../routes';


const Bread = () => {
  const currentRoute = useLocation();
  const navigate = useNavigate()
  const seachParams = useSearchParams()
  const [routeCount, setRouteCount] = useState(0)
  const [prevRoute, setPrevRoute] = useState(null);

  const handleClick = () => {
    if (currentRoute.pathname !== '/') {
      navigate('/', { replace: true });
    }
  };

  const formattedPathname = currentRoute.pathname.startsWith('/') ? currentRoute.pathname.substring(1) : currentRoute.pathname;


  const handleRouteChange = () => {
    setRouteCount(routeCount + 1)
  }

  useEffect(() => {
    if (prevRoute && prevRoute !== currentRoute.pathname) {
      setPrevRoute(currentRoute.pathname);
    } else if (!prevRoute) {
      setPrevRoute(currentRoute.pathname);
    }
  }, [currentRoute, prevRoute]);


  return (
    <div>
      <span className='display'>
        <span className='breadcrumb'>
          <Link className='link-bread' to='/' onClick={handleClick}>Home</Link>
        </span>
        {prevRoute && prevRoute !== '/' && <span className='property'> {'>'} </span>}
        <span className='crumb'>{formattedPathname}</span>
      </span>
    </div>
  )
}

export default Bread