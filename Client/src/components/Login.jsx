import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'

import Admin from './Admin'
import Student from './Student'
import Teacher from './Teacher'
import Librarian from './Librarian'
import backgroundImage from '../assets/bg.jpeg'
import logo from '../assets/logo.png'

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
          <Flex
            width="100vw"
            height="100vh"
            alignItems="center"
            justifyContent="center"
            bgImage={`url(${backgroundImage})`}
            bgSize="cover"
          >
            <Box
              p={8}
              maxWidth="600px"
              width="100%"
              borderRadius={10}
              bg="RGBA(0, 0, 0, 0.36)"
            >
              <VStack spacing="1">
                <Image
                  boxSize="150px"
                  objectFit="contain"
                  src={logo}
                  alt="Logo"
                />

                <form onSubmit={formik.handleSubmit}>
                  <VStack>
                    <FormControl>
                      <FormLabel
                        htmlFor="userType"
                        color="RGBA(255, 255, 255, 0.80)"
                      >
                        Select User Type
                      </FormLabel>
                      <Select
                        id="userType"
                        name="userType"
                        variant="outline"
                        mb={4}
                        bg="RGBA(255, 255, 255, 0.80)"
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
                      isInvalid={
                        formik.touched.username && formik.errors.username
                      }
                    >
                      <FormLabel
                        htmlFor="username"
                        color="RGBA(255, 255, 255, 0.80)"
                      >
                        Username
                      </FormLabel>
                      <Input
                        id="username"
                        name="username"
                        type="text"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        placeholder="UserName/ Roll No / Admission No"
                        variant="outline"
                        mb={4}
                        bg="RGBA(255, 255, 255, 0.80)"
                        width="400px"
                      />
                      <FormErrorMessage>
                        {formik.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={
                        formik.touched.password && formik.errors.password
                      }
                    >
                      <FormLabel
                        htmlFor="password"
                        color="RGBA(255, 255, 255, 0.80)"
                      >
                        Password
                      </FormLabel>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Password(Default password is Roll No.)"
                        variant="outline"
                        mb={4}
                        bg="RGBA(255, 255, 255, 0.80)"
                        width="400px"
                      />
                      <FormErrorMessage>
                        {formik.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                    {/* Switch  */}
                    <FormControl
                      display="flex"
                      alignItems="center"
                      justifyContent={'right'}
                    >
                      <FormLabel
                        htmlFor="rememberMe"
                        mb="0"
                        color="RGBA(255, 255, 255, 0.80)"
                      >
                        Remember me
                      </FormLabel>
                      <Switch id="rememberMe" colorScheme="red" />
                    </FormControl>

                    <Button
                      type="submit"
                      size={'md'}
                      colorScheme="red"
                      height="34px"
                      width="400px"
                    >
                      Log In
                    </Button>
                  </VStack>
                </form>
              </VStack>
            </Box>
          </Flex>
        </div>
      )}
    </div>
  )
}

export default Login
 