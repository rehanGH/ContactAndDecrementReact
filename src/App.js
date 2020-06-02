import React, { Component } from 'react';
import ContactCard from "./ContactCard";
import Ttile from "./Title"
import './App.css';

class App extends Component {
  render(){
    return (
      <>
      <div className="Title">
        <Ttile />
      </div>
        <ContactCard 
          name = "John Cena"
          mobileNum = "(718) 777-5059"
          workNum = "(212) 456-9391"
          email = "johnCen@gmail.com"
        />
        <hr />
         <ContactCard 
          name = "Tae Li"
          mobileNum = "(347) 234-1236"
          workNum = "(212) 426-9734"
          email = "taeWithu@hotmail.com"
        />
        <hr />
         <ContactCard 
          name = "Rose Smith"
          mobileNum = "(646) 519-3343"
          workNum = "(212) 127-7554"
          email = "rosie@yahoo.com"
        />
      </>
    );
  }
}

export default App;
