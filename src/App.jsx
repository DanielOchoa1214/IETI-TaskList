import { Header } from './components/Header/Header'
import { TaskList } from './components/TaskList/TaskList'

const tasks = [
  {
      name: "Terminar este proyecto",
      state: false
  },
  {
      name: "Ir a dormir",
      state: false
  },
  {
      name: "Comida de Figo",
      state: true
  },
]

function App() {

  return (
    <>
      <Header />
      <TaskList list={tasks}/>
    </>
  );
}

export default App
