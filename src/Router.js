import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ViewTodoDetail from './pages/TodoDetail';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<ViewTodoDetail />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
