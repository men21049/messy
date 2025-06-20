import { useState } from 'react';

const MessageSetup = () => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('info');

  return (
    <div className="card border-primary shadow">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Message Setup</h5>
      </div>

      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Message Content</label>
          <textarea
            className="form-control"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message Type</label>
          <select
            className="form-select"
            value={messageType}
            onChange={(e) => setMessageType(e.target.value)}
          >
            <option value="info">Info</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="danger">Error</option>
          </select>
        </div>

        {message && (
          <div className={`alert alert-${messageType} mt-4`}>
            <strong>Preview:</strong> {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageSetup;