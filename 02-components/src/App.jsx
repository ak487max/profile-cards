import React from 'react';
import Card from './components/card';

const App = () => {
  console.log("App rendered");

  return (
    <div className="parent">
      <Card
  user="rosh"
  age="21"
  img="https://plus.unsplash.com/premium_photo-1721985803589-418d2d337acf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8M2QlMjByZW5kZXJzfGVufDB8fDB8fHww"
/>
      <Card user="akansha" age='19' img='https://images.unsplash.com/photo-1782280087454-94ed56393d01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user="manya" age="21" img="https://images.unsplash.com/photo-1781739849963-0382a061f05f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="sneha" age="21" img="https://images.unsplash.com/photo-1783231754573-b5f6672c70ac?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  );
};

export default App
