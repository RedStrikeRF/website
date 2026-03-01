import React, { PropsWithChildren, useMemo } from 'react';
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';

import ruRU from 'antd/locale/ru_RU';
import enUS from 'antd/locale/en_US';

export const AntdProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation();
  
  const locale = useMemo(() => {
    const lang = i18n.language.split('-')[0];
    
    switch (lang) {
      case 'ru':
        return ruRU;
      case 'en':
      default:
        return enUS;
    }
  }, [i18n.language]);
  
  return (
    <ConfigProvider locale={locale}>
      {children}
    </ConfigProvider>
  );
};