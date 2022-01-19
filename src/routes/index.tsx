import React from 'react';
import { RootState } from '@store/index';
import { NavigationContainer } from '@react-navigation/native';
import NotLoggedRoutes from './NotLoggedRoutes';
import LoggedRoutes from './Logged.routes';
import { useSelector } from 'react-redux';

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
