import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NotLoggedRoutes from './NotLoggedRoutes';
import LoggedRoutes from './Logged.routes';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Routes = () => {
  return (
    <NavigationContainer>
      <NotLoggedRoutes />
    </NavigationContainer>
  );
};

export default Routes;
