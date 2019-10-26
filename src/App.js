import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TransferFund from './component/TransferFund'
import Credential from './component/Credential'

function App() {
  const [creds, setCreds] = useState(false)
  return (
    <div className="App">
      <header className="App-header"><div>
        <img src={logo} className="App-logo" alt="logo" />
        <img src="https://developer.mtn.cm/OnlineMomoWeb/console/uses/itg_img/buttons/MOMO_buy_now_EN.jpg" className="App-logo" alt="logo" style={{width : '200px', height: '100px'}}/>

      </div>
        {creds ? <Credential /> : <Fragment >
        <p>
          Welcome to momouniverse, here we exchange your momo with equivalent in any currency for your online activities <br />
          <code>Greate to have you on board</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started Today
        </a>
          <TransferFund setCreds={() => setCreds(true)} />
        </Fragment>
      }
      </header>
      
    </div>
  );
}

export default App;
