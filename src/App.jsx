import image from './assets/mountains.jpg';
import './App.css';
import React from 'react';

function App() {
  
  const hOne = React.createElement('h1', {}, 'Hello React !');
  const p = React.createElement('p', {}, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut cupiditate quibusdam dolores ea, accusamus illo aliquam magnam ab. Ex optio quo officia minima eius placeat animi velit quibusdam nemo!');
  const jpg = React.createElement('img', {src:`${image}`, alt:'mountains'}, null);

  return (
    <>
      <h1>Hello world !</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut cupiditate quibusdam dolores ea, accusamus illo aliquam magnam ab. Ex optio quo officia minima eius placeat animi velit quibusdam nemo!</p>
      <img src={image} alt='mountains'></img>


      {hOne}
      {p}
      {jpg}


      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </form>

    </>
  )
}

export default App
