import { useState } from 'react'
import { useFormik } from 'formik'
import Admin from './Admin'
import Student from './Student'
import Teacher from './Teacher'
import Librarian from './Librarian'

const Login = () => {
  const [userType, setUserType] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [selectedUserType, setSelectedUserType] = useState('')

  const users = [
    { userType: 'admin', username: 'admin', password: 'admin123' },
    { userType: 'student', username: 'student', password: 'student123' },
    { userType: 'teacher', username: 'teacher', password: 'teacher123' },
    { userType: 'librarian', username: 'librarian', password: 'librarian123' },
    { userType: 'admin', username: 'admin1', password: 'admin123' },
    { userType: 'admin', username: 'admin2', password: 'admin456' },
    { userType: 'admin', username: 'admin3', password: 'admin789' },
  ]

  const handleLogin = () => {
    const currentUser = users.find((user) => user.userType === selectedUserType)
    if (!currentUser) {
      alert('Invalid user type. Please select a valid user type.')
      return
    }

    if (
      username === currentUser.username &&
      password === currentUser.password
    ) {
      setUserType(currentUser.userType)
    } else {
      alert('Invalid credentials. Please try again.')
    }
  }

  const handleForgotPassword = () => {
    //  forgot password logic
    alert('Please contact your administrator to reset your password.')
  }

  return (
    <div>
      {userType === 'admin' ? (
        <div>
          <Admin />
        </div>
      ) : userType === 'student' ? (
        <div>
          <Student />
        </div>
      ) : userType === 'teacher' ? (
        <div>
          <Teacher />
        </div>
      ) : userType === 'librarian' ? (
        <div>
          <Librarian />
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <form>
            <label>
              Select User Type:
              <select
                value={selectedUserType}
                onChange={(e) => {
                  setSelectedUserType(e.target.value)
                }}
              >
                <option value="">Select User Type</option>
                <option value="admin">Admin</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="librarian">Librarian</option>
              </select>
            </label>
            <br />
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
              Log In
            </button>
            <br />
          </form>
        </div>
      )}
    </div>
  )
}
export default Login
