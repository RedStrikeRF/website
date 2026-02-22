import React from 'react';
import { StoreProvider } from './StoreProvider';
import { RouterProvider } from './RouterProvider';



export const Providers: React.FC = () => {
  return (
    <StoreProvider>
      <RouterProvider>
      </RouterProvider>
    </StoreProvider>
  );
};