import { useState } from 'react';

const APIKEY = () => {
  const [apiKey, setApiKey] = useState('');

  const generateApiKey = () => {
    const newKey = 'up_' + Math.random().toString(36).substr(2, 24);
    setApiKey(newKey);
  };

  return (
    <div className="card border-primary shadow">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">API Key Setup</h5>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Your API Key</label>
          <div className="input-group">
            <input
              type="text"
              value={apiKey}
              readOnly
              className="form-control bg-light"
              placeholder="Click 'Generate API Key' to create your key"
            />
            <button
              onClick={generateApiKey}
              className="btn btn-primary"
              type="button"
            >
              Generate API Key
            </button>
          </div>
        </div>

        {apiKey && (
          <div className="alert alert-success mt-3 d-flex align-items-center">
            <i className="bi bi-check-circle-fill me-2"></i>
            API Key Generated Successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default APIKEY;