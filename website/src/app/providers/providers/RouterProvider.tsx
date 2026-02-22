import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '../router';


export const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};