import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ViewTodoDetail from './pages/TodoDetail';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<ViewTodoDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
