import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NotLoggedRoutes from './NotLoggedRoutes';
import LoggedRoutes from './Logged.routes';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Routes = () => {
  const token = useSelector(
    (state: RootState) => state.stock.userInfo.token.token
  );

  return (
    <NavigationContainer>
      {token ? <LoggedRoutes /> : <NotLoggedRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
