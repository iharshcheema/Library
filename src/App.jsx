import { Routes, Route } from 'react-router-dom'
import Admin from './components/Admin'
import Student from './components/Student'
import Librarian from './components/Librarian'
import Teacher from './components/Teacher'
import Login from './components/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/librarian" element={<Librarian />} />
      </Routes>
    </>
  )
}

export default App
