import React, {useState} from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import Store from './components/Products/Store';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ProductDetails from './components/Products/ProductDetails';
import ShopCart from "./components/Products/ShopCart";
import useLocalStorage from 'use-local-storage';
import { I18nProvider, LOCALES } from './components/i18n';
import { Provider} from "react-redux";
import { store } from './redux/store';
import {SubNavbar} from "./components/mainNavbar"



export interface IApplicationProps {}
export const App: React.FC<IApplicationProps> = (): JSX.Element => {

  const [locale, setLocale] = useState(LOCALES.EN);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  

  return (
    <>
    
    <I18nProvider locale={locale} chidren={undefined}>
    <div className='App' data-theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
      <Navbar
        dataSwitchTheme={switchTheme}
        dataTheme={theme}
        setLocale={setLocale}
        />
        <SubNavbar/>
        <Routes>
          <Route path="/:id" element={<ProductDetails />} />
          <Route  path="/" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      </BrowserRouter>
    </Provider>
    </div>
    </I18nProvider>
    
    </>
  );
}

