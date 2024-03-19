import './App.css'
import Countdown from './components/Countdown'
import LikeButton from './components/LikeButton'
import HandleUsers from './components/HandleUsers'
import UserList from './components/UserList'
import DataUserList from './components/DataUserList'
import Select from './components/Select'
import KeyString from './components/KeyString'
import LinkPrint from './components/LinkPrint'
import PasswordLevel from './components/PasswordLevel'
import Form from './components/Form'

function App() {

  const userList = ["Sergio", "Victoria", "Iván", "Liviu"];
  const dataList = [{name: "Sergio", age: 28}, 
  { name: 'Victoria', age: 27 },
  { name: 'Iván', age: 30 }, 
  { name: 'Liviu', age: 26 }];

  const items = ["Manzana", "Papaya", "Mango", "Plátano", "Kiwi"];

  const keyMessage = "A tope con React"

  return (
    <>
      <Countdown />
      <LikeButton />
      <HandleUsers />
      <UserList userList={userList} />
      <DataUserList dataList={dataList} />
      <Select items={items}/>
      <br /><br />
      <KeyString keyMessage={keyMessage}/>
      <LinkPrint />
      <br /><br />
      <PasswordLevel />
      <Form />
    </>
  );
}

export default App
