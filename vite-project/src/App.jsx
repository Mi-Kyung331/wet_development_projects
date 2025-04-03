import './App.css'
import { useState } from 'react';
import './components/Header/Header';
import './components/Modal/Modal';

function App() {

  const [ hours, sethours ] = useState();

  return (
    <div>
      <Header />
    </div>
  );

}

export default App
