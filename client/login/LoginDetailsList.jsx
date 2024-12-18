import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LoginCard } from './LoginCard';

export const LoginDetailsList = () => {
  const [loginDetails, setLoginDetails] = useState([]);
  

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/login')
      .then((data) => {
        setLoginDetails(data.data.data);
      })
      .catch(() => setError('Failed to fetch login details'))
      
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      
        {loginDetails?.map((key) => (
          <LoginCard
          title={key.title}
          genre={key.genreid}
          email={key.email}
          password={key.password}
        />
        ))}
    </div>
  );
};

