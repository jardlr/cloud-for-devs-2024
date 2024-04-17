import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm';

function App() {

  const todos = [
    {"id": 1, "description": "sup g"},
    {"id": 2, "description": "sup gg"}
  ]
  

 //let firstName = "jose";
 const [firstName, setFirstName] = useState("Jose");

  const changeFirstName = event => {
    //firstName = event.target.value;
    setFirstName(event.target.value);
  }
  return (
    
    <>
      <NewTaskForm></NewTaskForm>
      <input onChange={changeFirstName} type="text" value={firstName} />
      <h1>{firstName}</h1>
      <ul>
          {
            todos.map(todo => <li>{todo.description}</li>)
        
          }
      </ul>
    </>
  );
}

export default App;
