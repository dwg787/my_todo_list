import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from '../pages/Home';
import Works from '../pages/Works';
import Work from '../pages/Work';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='works' element={<Works />} />
          <Route path='works/:id' element={<Work />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
