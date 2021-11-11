import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import ToDoList from './components/ToDoList/ToDoList'

function App() {

  return (
    <div className="todoapp">
      <Header></Header>
      <Main>
        <ToDoList></ToDoList>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
