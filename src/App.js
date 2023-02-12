import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Appointments from './components/pages/Appointments';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  
    const [appNum, setAppNum] = useState(0);

  const s1 = [
    {
        id: 1,
        times: 0,
        star: 305,
        checked: false,
        name: 'Engine repair',
        added: false,
        date: '20th Jan 2022 09:30 AM',
        src: 'https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/215029/215029_Engine_Web.jpg'
    },
    {
        id: 2,
        times: 0,
        star: 476,
        checked: false,
        name: 'Acumulator repair',
        added: false,
        date: '24th Jan 2022 09:30 AM',
        src: 'https://images.squarespace-cdn.com/content/v1/5d92203ac120554b286fbf53/1574367678774-SHKY5W1S6DWO1UQOZZRV/Blog+Header+Image_+Blog+Header_7+Signs+Your+Car+Battery+is+Dying'
    },
    {
        id: 3,
        times: 0,
        star: 621,
        checked: false,
        name: 'Wheel repair',
        added: false,
        date: '13th Jan 2022 09:30 AM',
        src: 'https://www.marioswheelrepair.co.uk/assets/images/company/index/slides/wheel-refurb.jpg'
    },

  ];

  const s2 = [
    {
        id: 4,
        times: 0,
        star: 456,
        checked: false,
        name: 'Lights repair',
        added: false,
        date: '1st Feb 2022 09:30 AM',
        src: 'https://media.istockphoto.com/id/168384013/photo/customized-car-headlight.jpg?s=612x612&w=0&k=20&c=921WeFZHtI2DskOlnXiXl-CFgfm5y31P6ko_5fN5PRc='
    },
    {
        id: 5,
        times: 0,
        star: 534,
        checked: false,
        name: 'Fuel repair',
        added: false,
        date: '6th Jun 2022 09:30 AM',
        src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 6,
        times: 0,
        star: 234,
        checked: false,
        name: 'Full service repair',
        added: false,
        date: '17th May 2022 09:30 AM',
        src: 'https://images.unsplash.com/photo-1606577924006-27d39b132ae2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    },

  ];

  const [appts, setAppts] = useState([]);
  
  const [services1, setSer1] = useState(s1);

  const [services2, setSer2] = useState(s2);

  const star1 = (serviceId) => {
    let arr1 = [];
    services1.forEach(element => {
      if(element.id === serviceId) {
      if(!element.checked) {
        console.log(element);
        element.star = element.star + 1;
        element.checked = true;
        console.log(element);
        arr1.push(element);
        
      } 
    }else{
      arr1.push(element);
    }
    });
    setSer1(arr1);
    console.log(services1);
    
    let arr2 = [];
    services2.forEach(element => {
      if(element.id === serviceId) {
      if(!element.checked) {
        element.star = element.star + 1;
        element.checked = true;
        arr2.push(element);
        
      }
    }
    else{
      arr2.push(element);
    }
    });
    setSer2(arr2);
    console.log(services2);
  }

  const star2 = (serviceId) => {
    let arr1 = [];
    services1.forEach(element => {
      if(element.id === serviceId) {
      if(element.checked) {
        element.star = element.star - 1;
        element.checked = false;
        console.log(element);
        arr1.push(element);
      }
    }
    else{
      arr1.push(element);
    }
    });
    setSer1(arr1);
    
    let arr2 = [];
    services2.forEach(element => {
      if(element.id === serviceId) {
      if(element.checked) {
        element.star = element.star - 1;
        element.checked = false;
        arr2.push(element);
      }
    }
    else{
      arr2.push(element);
    }
    });
    setSer2(arr2);
  }

  const makeApnt = (serviceId) => {
    //console.log(serviceId);
    services1.forEach(element => {
      if(element.id === serviceId) {
        if(element.added === false) {
          setAppNum(appNum+1);
          element.added = true;
        }
      }
    });
    services2.forEach(element => {
      if(element.id === serviceId) {
        if(element.added === false) {
          setAppNum(appNum+1);
          element.added = true;
        }
      }
    });
    let addedServices1 = services1.filter((item) => item.added === true);
    let addedServices2 = services2.filter((item) => item.added === true);
    let addedServices = [...addedServices1, ...addedServices2];
    //console.log(addedServices);
    setAppts(addedServices);
  }

  const deleteApnt = (serviceId) => {
    //.log(serviceId);

    appts.forEach(element => {
      if(element.id === serviceId) {
        if(element.added === true) {
          setAppNum(appNum-1);
          element.added = false;
        }
      }
    });

    let newApp = appts.filter((item) => item.added == true);
    setAppts(newApp);
  }

    return (
      <BrowserRouter className="App">
        <Navbar num={appNum}></Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services services1={services1} services2={services2} 
            makeAnAppointment={makeApnt} star1={star1} star2={star2} />}/>
          <Route path="/appointments" element={<Appointments data={appts} deleteAnAppointment={deleteApnt} />}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    );

}

export default App;
