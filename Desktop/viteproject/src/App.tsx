import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/mainpage'

function App() {

  return (
    <Routes >
      <Route path='/' element={<MainPage></MainPage>}></Route>
    </Routes>
  )
}

export default App
