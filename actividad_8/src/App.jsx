import './App.css'
import {useDispatch} from 'react-redux'; 
import { addUser } from './components/userSlice';
import { useEffect } from 'react';
import Header from './components/Header';
import Email from './components/Email';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => dispatch(addUser(data)))
      .catch(err => console.log(err))
  }, []);

  return(
    <>
    <h1>Ejercicio de Redux</h1>
    <Header />
    <hr />
    <Email />
    </>
  );

}

export default App
