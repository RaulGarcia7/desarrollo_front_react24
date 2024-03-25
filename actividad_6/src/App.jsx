import { useState } from 'react'
import './App.css'
import ColorPicker from './components/ColorPicker';
import TextToChange from './components/TextToChange';
import ToDoList from './components/ToDoList';

function App() {

  const [textStyle, setTextStyle] = useState({color: "white"});

  const handleColorChange = (newColor) => {
    setTextStyle({color: newColor})
  };
  
  return (
    <>
      <ColorPicker onColorChange={handleColorChange} />
      <TextToChange textStyle={textStyle}/>
      <hr />
      <ToDoList />
    </>
  )
}

export default App
