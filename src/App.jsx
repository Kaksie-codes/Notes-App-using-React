import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './Components/Header'
import NotesListPage from './Pages/NotesListPage'
import NotePage from './Pages/NotePage'
import './App.css'

function App() {
  

  return (
    <Router>
      <div className="App">      
        <Header/> 
        <Routes>
          <Route path='/' exact element = {<NotesListPage/>}/>
          <Route path="/note" element={<NotePage/>}/>
        </Routes>        
      </div>
    </Router>    
  )
}

export default App;
