// Updated React component with responsive modern design and full customization UI
import React, { useState } from 'react';
import Menu from './components/Menu';
import APIKEY from './components/ApiKey';
import MessageSetup from './components/Message';
import Integration from './components/Integration';

const App = () => {
    const [activeTab, setActiveTab] = useState('setup');
    const handleSetActiveTab=(item:string) =>{ setActiveTab(item); console.log(item);};

    const renderContent = () => {
    switch (activeTab) {
      case 'setup':
        return <APIKEY></APIKEY>;
      case 'messages':
        return <MessageSetup></MessageSetup>;
      case 'integration':
        return <Integration></Integration>;
      default:
        return <p>Select a tab from the menu.</p>;
    }
  };
  return (
        <><nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">Business Message System</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
              </button>
          </div>
      </nav><div className="container-fluid">
              <div className="row">

                  <div className="col-md-3 col-lg-2 sidebar p-3">
                      <h5>Home</h5>
                      <ul className="nav nav-pills flex-column">
                          <Menu onSetActive={handleSetActiveTab}/>
                      </ul>
                      <hr />
                  </div>
                  <div className="col-md-9 col-lg-10 main-content p-4">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                          <h1>Main Content Area</h1>
                      </div>
                      <div className="row">
                          <div className="col-12">
                              <div className="card">
                                  {renderContent()}
                                  <div className="card-body">
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div></>);
  };


export default App;
