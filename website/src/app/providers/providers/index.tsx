import React from 'react';
import { StoreProvider } from './StoreProvider';
import { RouterProvider } from './RouterProvider';
import { I18nProvider } from "./I18nProvider";
import {AntdProvider} from "./AntdProvider";

export const Providers: React.FC = () => {
  return (
    <StoreProvider>
      <I18nProvider>
        <AntdProvider>
          <RouterProvider />
        </AntdProvider>
      </I18nProvider>
    </StoreProvider>
  );
};