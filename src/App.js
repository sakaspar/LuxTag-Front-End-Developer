import iphone from './assets/iphone.svg';
import './App.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";


function App() {
  const editor = useRef(null)
    const [content, setContent] = useState('')
    const [send, setSend] = useState('')
    const config = {
        readonly: false 
        
    }
  return (
<div className="App">
        <div className='Left__Part'>
         <div className='Left__Part_main'>
          <div className='Left__Part__Title'>
            <div className='Left__Part__Title__Title'>Customisation</div>
            <div className='Left__Part__Title__SubTitle'>The text will reflect mobile view</div>
            <br></br>
          </div>
        <div className='Left__Part__Editor'> 
      
      <Accordion  >
      <div className='Summery1' >
        <AccordionSummary className='slidebartext' 
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header">Text
        </AccordionSummary>
        </div>
        <JoditEditor 
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          editor={FocusEvent}
          onBlur={newContent => setContent(newContent)} 
        />
      </Accordion>
       </div>
        <div className='Left__Part__Publish__Btn'> 
          <button   className='Left__Part__Publish__Btn__Style' onClick={send => setSend(content)} >Publish {'>'}</button>
        </div>
      </div>
    </div>
  <div className='Right__Part'>
    <div className='containerIphone'>
      <div className='textarea'> 
        <div className='Header'>Text</div>
          <div className="top-left" dangerouslySetInnerHTML={{__html:send}} />
       </div>
        <img src={iphone} alt="Logo" className="Right__Part__Image"/>
      </div>    
    </div>
   </div> 
  );
}


export default App;
