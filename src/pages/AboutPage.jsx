import React from 'react';

const AboutPage = (props) => {
  return (
    <>
      <p>Prop(name) = {props.name}</p>
      <p>Prop(age) = {props.age}</p>
      <p>Prop(firstname) = {props.firstname}</p>
    </>
  );
};

export default AboutPage;
