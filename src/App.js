import Navbar from './components/Navbar';
import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
   const pgSize = 8;
   const Country= "us";
    return (
      <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={pgSize} country={Country} category="general"/>}/>
          <Route exact path="/sports" element={<News key="sports" pageSize={pgSize} country={Country} category="sports"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pgSize} country={Country} category="entertainment"/>}/>
          <Route exact path="/science" element={<News key="science" pageSize={pgSize} country={Country} category="science"/>}/>
          <Route exact path="/business" element={<News key="business" pageSize={pgSize} country={Country} category="business"/>}/>
          <Route exact path="/health" element={<News key="health" pageSize={pgSize} country={Country} category="health"/>}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={pgSize} country={Country} category="technology"/>}/>
        </Routes>
      </Router>
      </div>
    )
  }
}

