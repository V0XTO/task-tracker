import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Table1 from './components/Table1';
import {Button,Navbar,NavbarContent,NavbarItem,NavbarBrand,} from "@nextui-org/react";
import Footer from './components/Footer';
import imageprincipal from './assets/taskP.svg';


function Home() {
  return (
    <div className='xl:flex'>
      <div>
      <p className=' text-2xl pl-3 xl:pl-6 pr-1 lg:text-4xl'>Task Tracker es una aplicación de seguimiento de tareas fácil de usar que te ayuda a organizar y gestionar tus actividades diarias de manera eficiente.</p>
      <Button color='primary' className='ml-3 mt-3 h-16 w-60 xl:w-96 xl:h-28 xl:text-3xl xl:font-bold' to="/herramienta"><Link to="/herramienta" className='h-full w-full flex justify-center items-center'>Use now</Link></Button>
      </div>
        <img src={imageprincipal} alt="" className='w-96 h-96 xl:w-[500rem] '/>

    </div>
  );
}

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
    <Router>
      <>
      <Navbar>
        <NavbarBrand><h2 className='font-bold '>Task Tracker ❗</h2></NavbarBrand>
        <NavbarContent><NavbarItem ><Link to="/task-tracker" >Inicio</Link></NavbarItem>
        <NavbarItem><Link to="/herramienta">Task Tracker</Link></NavbarItem>
</NavbarContent>
      </Navbar>
        <h1 className='font-bold text-4xl pl-3 pt-9 pb-4 xl:text-9xl'>Task Tracker</h1>
        
        <Routes>
          <Route path="/herramienta" element={
            
              
            <div className='xl:p-10'>
              <Form setTaskList={setTaskList} taskList={taskList} />
              <Table1 taskList={taskList} setTaskList={setTaskList} />
            </div>
          } />
          <Route path="/" element={<Home />} />


          <Route path="/task-tracker" element={
            
              
            <div className='xl:flex'>
      <div>
      <p className=' text-2xl pl-3 xl:pl-6 pr-1 lg:text-4xl'>Task Tracker es una aplicación de seguimiento de tareas fácil de usar que te ayuda a organizar y gestionar tus actividades diarias de manera eficiente.</p>
      <Button color='primary' className='ml-3 mt-3 h-16 w-60 xl:w-96 xl:h-28 xl:text-3xl xl:font-bold' to="/herramienta"><Link to="/herramienta" className='h-full w-full flex justify-center items-center'>Use now</Link></Button>
      </div>
        <img src={imageprincipal} alt="" className='w-96 h-96 xl:w-[500rem] '/>

    </div>
          } />
          <Route path="/" element={<Home />} />
          
        </Routes>
      </>
      <Footer/>
    </Router>
  );
}

export default App;
