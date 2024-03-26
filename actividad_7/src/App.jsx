import './App.css'
import Header from './components/Header'
import { LanguageProvider } from './components/LanguageContext';
import ToDoList from './components/ToDoList';
import { ToDoProvider } from './components/ToDoContext';


function App() {

  return (
    <>
      <LanguageProvider>
        <Header />
      </LanguageProvider>
      <hr />
      <ToDoProvider>
        <ToDoList />
      </ToDoProvider>
    </>
  )
}

export default App
