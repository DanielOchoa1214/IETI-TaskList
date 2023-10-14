import { TaskContext } from './TasksContext';
import { Header } from './components/Header/Header'
import { TaskList } from './components/TaskList/TaskList'

function App() {
  return (
    <>
    <TaskContext.Provider>
      <Header />
      <TaskList />
    </TaskContext.Provider>
    </>
  );
}

export default App
