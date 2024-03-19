import './App.css'
import Greeting from './components/Greeting';
import ShowName from './components/ShowName';
import ShowDate from './components/ShowDate';
import Loading from './components/Loading';
import ShowPassword from './components/ShowPassword';
import Counter from './components/Counter';
import StringCounter from './components/StringCounter';
import ButtonHey from './components/ButtonHey';
import TextToH1 from './components/TextToH1';


function App() {

  const user = {
    name: 'Raúl'
  };

  const currentDate = Date.now();

  return (
    <>
      <Greeting title={"¡Hola! ¡Este es mi primer componente!"} />
      <ShowName user={user} />
      <ShowDate date={currentDate} />
      <Loading loadMessage={"Loading..."} show={true}/>
      <ButtonHey />
      <TextToH1 />
      <br />
      <ShowPassword showPassword={false} />
      <Counter />
      <StringCounter />
    </>
  );
}

export default App
