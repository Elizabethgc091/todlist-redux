import './App.css';
import {useSelector} from 'react-redux'
import TaskForm from './components/TaskForm'
import TaskList from "./features/task/TaskList";

function App() {

    return (
        <div className="App">
            <h1>Hola mundo</h1>
            <TaskForm/>
            <TaskList/>
        </div>
    );
}

export default App;
