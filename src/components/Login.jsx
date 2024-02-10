import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react'
import Admin from './Admin'
import Student from './Student'
import Teacher from './Teacher'
import Librarian from './Librarian'

const Login = () => {
  const [userType, setUserType] = useState(null)
  const [selectedUserType, setSelectedUserType] = useState('')
  const users = [
    // dummy array 
    { userType: 'admin', username: 'admin', password: 'admin123' },
    { userType: 'student', username: 'student', password: 'student123' },
    { userType: 'teacher', username: 'teacher', password: 'teacher123' },
    { userType: 'librarian', username: 'librarian', password: 'librarian123' },
    { userType: 'admin', username: 'admin1', password: 'admin123' },
    { userType: 'admin', username: 'admin2', password: 'admin456' },
    { userType: 'admin', username: 'admin3', password: 'admin789' },
  ]

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values, action) => {
      handleLogin(values.username, values.password)
      action.resetForm()
    },
  })

  const handleLogin = (username, password) => {
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

    // Access the form data from here
    const formData = formik.values
    console.log('Form Data:', formData)
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
          <VStack spacing="4">
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
              <VStack>
                <FormControl>
                  <FormLabel htmlFor="userType">Select User Type</FormLabel>
                  <Select
                    id="userType"
                    name="userType"
                    value={selectedUserType}
                    onChange={(e) => setSelectedUserType(e.target.value)}
                  >
                    <option value="">Select User Type</option>
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="librarian">Librarian</option>
                  </Select>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.username && formik.errors.username}
                >
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.password && formik.errors.password}
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>

                <Button type="submit">Log In</Button>
              </VStack>
            </form>
          </VStack>
        </div>
      )}
    </div>
  )
}

export default Login
