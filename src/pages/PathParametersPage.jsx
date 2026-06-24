import React from 'react';
import { useParams } from 'react-router';

const PathParametersPage = () => {
  const { id, name, age } = useParams();
  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
};

export default PathParametersPage;
