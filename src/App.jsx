import React, { useState } from 'react'
import Admin from './components/Admin'
import Student from './components/Student'
import Librarian from './components/Librarian'
import Teacher from './components/Teacher'

const App = () => {
  const [userType, setUserType] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningUp, setIsSigningUp] = useState(false)

  const handleLogin = () => {
    // Backend actual authentication logic
    const adminCredentials = { username: 'admin', password: 'admin123' }
    const studentCredentials = { username: 'student', password: 'student123' }
    const librarianCredentials = {
      username: 'librarian',
      password: 'librarian123',
    }
    const teacherCredentials = { username: 'teacher', password: 'teacher123' }

    if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      setUserType('admin')
    } else if (
      username === studentCredentials.username &&
      password === studentCredentials.password
    ) {
      setUserType('student')
    } else if (
      username === librarianCredentials.username &&
      password === librarianCredentials.password
    ) {
      setUserType('librarian')
    } else if (
      username === teacherCredentials.username &&
      password === teacherCredentials.password
    ) {
      setUserType('teacher')
    } else {
      alert('Invalid credentials. Please try again.')
    }
  }

  const handleSignUp = () => {
    // backend logic
    alert('Signup successful!')
    setIsSigningUp(false)
  }

  const renderUserType = () => {
    if (userType === 'admin') {
      return <Admin />
    } else if (userType === 'student') {
      return <Student />
    } else if (userType === 'librarian') {
      return <Librarian />
    } else if (userType === 'teacher') {
      return <Teacher />
    } else {
      return (
        <div>
          {isSigningUp ? (
            <div>
              <h1>Sign Up</h1>
              <form onSubmit={handleSignUp}>
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
                <button type="submit">Sign Up</button>
              </form>
              <button onClick={() => setIsSigningUp(false)}>
                Back to Login
              </button>
            </div>
          ) : (
            <div>
              <h1>Login</h1>
              <form>
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
              </form>
              <button onClick={() => setIsSigningUp(true)}>Sign Up</button>
            </div>
          )}
        </div>
      )
    }
  }

  return <div>{renderUserType()}</div>
}

export default App
