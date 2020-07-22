import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

function Picture() {
    return <div className="picture">Picture</div>;
}

function PersonalDetails() {
    const [details, setDetails] = useState([
        {
            header: 'Name',
            content: '',
            isSaved: false,

        },
        {
            header: 'Adress',
            content: '',
            isSaved: false,
        }
    ]);
    
    function updateDetailsAtIndex(e, i) {
      const newDetails = [...details];
      newDetails[i].content = e.target.value;
        newDetails[i].isSaved = false;
      setDetails(newDetails);
    }
    
    function saveDetailsAtIndex(i) {
        const newDetails = [...details];
        newDetails[i].isSaved = true;
      setDetails(newDetails);
    }
    

    
    return (
        <ul>
            {details.content}
            <form className='personalDetails'>
                <h3 className="headerDetail"> Details </h3>
                {details.map((detail, i) => (
                    <div 
                        key={'detail' + i} 
                        className='details-header'>
                          <div className="innerDetailbox">
                            <div>{detail.header}</div>
                            <input
                                className={detail.isSaved ? 'details-is-saved' : 'details'}
                                type="text" 
                                placeholder={"Type in your " + detail.header} 
                                value={details.content} 
                                onChange={e => updateDetailsAtIndex(e, i)} />
                              {!detail.isSaved && (<Button 
                                    variant="secondary" 
                                    onClick={() => saveDetailsAtIndex(i)}>Save</Button>)}
                            
                          </div>
                    </div>
                ))}           
            </form>
        </ul>
    );
    
}

function Textbox() {
    const [textbox, setTextbox] = useState([
        {
            header: 'Your Interests',
            content: '',
            id: 'interests',
            isSaved: false,
            
        },
        {
            header: 'Your Experiences',
            content: '',
            id: 'experience',
            isSaved: false,
        }
    ]);
    
    function updateTextboxAtIndex(e, i) {
      const newTextbox = [...textbox];
      newTextbox[i].content = e.target.value;
        newTextbox[i].isSaved = false;
      setTextbox(newTextbox);
    }
    
    function saveTextboxAtIndex(i) {
        const newTextbox = [...textbox];
        newTextbox[i].isSaved = true;
      setTextbox(newTextbox);
    }
    
    return (
        <ul>
            <form className='text'>
                {textbox.map((textb, i) => (
                <div key={'textb' + i} className="outerTextbox">
                    <h3 className="headerTextbox">{textb.header} </h3>
                      <div className="innerTextbox">
                        <input className="textbox" type="text" placeholder="Type in your Stuff" value={textb.content} onChange={e => updateTextboxAtIndex(e, i)} />
                          {!textb.isSaved && (<Button 
                                    variant="secondary" 
                                    onClick={() => saveTextboxAtIndex(i)}>Save</Button>)}
                        </div>
                </div>
                ))}           
            </form>
        </ul>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
        <main>
            <Picture />
            <PersonalDetails />
            <Textbox />
            
        </main>
    </div>
  );
}

export default App;
