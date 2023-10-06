import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Table1 from './components/Table1';
import { Button, Navbar, NavbarContent, NavbarItem, NavbarBrand } from "@nextui-org/react";
import Footer from './components/Footer';


function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('taskList');
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
    
     
      <h1 id="inicio" className='font-bold text-4xl pl-3 pt-9 pb-4 xl:text-9xl'>Task Tracker</h1>
      <div className='xl:p-10'>
        <Form setTaskList={setTaskList} taskList={taskList} />
        <Table1 taskList={taskList} setTaskList={setTaskList} />
        <Footer />
      </div>
      
      
    </>
  );
}

export default App;
