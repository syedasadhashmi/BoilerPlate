import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { verifyToken } from "../../pages/Restaurants/restaurants";
// import { post } from '../../utils/lib';
const ProtectedRoutes = ({ children, router }) => {
  const [viewPage, setViewPage] = useState(false);

  useEffect(() => {
    verifyToken()
      .then((response) => {
        if (router.pathname !== '/Login') {
          console.log(response);
          setViewPage(true);
          return;
        }
        router.push('/');
      })
      .catch(() => {
        if (router.pathname === '/Login') {
          console.log('not login');
          setViewPage(true);
          return;
        }
        router.push('/Login');
      });

    return () => null;
  }, [viewPage, router.pathname]);
  return <>{viewPage && children}</>;
};

export default ProtectedRoutes;
