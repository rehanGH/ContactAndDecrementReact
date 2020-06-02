import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <>
        <ContactCard 
          firstName = "John"
          mobileNum = "(718) 777-5059"
          workNum = "(212) 456-9391"
          email = "johnCen@gmail.com"
        />
         <ContactCard 
          firstName = "Tae"
          mobileNum = "(347) 234-1236"
          workNum = "(212) 426-9734"
          email = "taeWithu@hotmail.com"
        />
         <ContactCard 
          firstName = "Rose"
          mobileNum = "(646) 519-3343"
          workNum = "(212) 127-7554"
          email = "rosie@yahoo.com"
        />
      </>
    );
  }
}

export default App;
