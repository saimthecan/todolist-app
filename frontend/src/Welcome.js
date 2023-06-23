import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { AuthContext } from './AuthContext';

const Welcome = () => {
  const navigate = useNavigate();
  const { authToken } = useContext(AuthContext);

  const handleButtonClick = () => {
    navigate('/todo');
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000524', color: 'white'}}>
      
      {authToken ? (
        <div>
          <h1>Welcome to Your ToDo List</h1>
          <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center'}}>
            <Button color="primary" onClick={handleButtonClick}>My ToDos</Button>
          </div>
        </div>
      ) : (
        <h1>Please login to view your todos</h1>
      )}
      
    </div>
  );
};

export default Welcome;
