// src/pages/home.js
import React from 'react';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import CreateNewTodo from '../components/InputSection/InputSection';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/Footer/Footer';
// import CustomButton from '../components/CustomButton';

const Home = () => {
  return (
    <Layout>
      <Header />
      <CreateNewTodo />
      <TodoList />
      <Footer />
    </Layout>
  );
};

export default Home;
