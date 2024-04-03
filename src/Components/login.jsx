

import { TextField, Button, Link, Typography, Container } from '@mui/material';

import { fetchLogin, valueUserName, valuePassword, setAccessToken,setRefreshToken } from '../action/action'
import useHistory from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
const LoginShop = () => {

  const dispatch = useDispatch()

  const { username, password,accessToken,refreshToken } = useSelector((reduxData) => reduxData.shopReducers)
 


  const handleChangeUserName = (event) => {
    const value = event.target.value
    dispatch(valueUserName(value))
  }

  const handleChangePassword = (event) => {
    const value = event.target.value
    dispatch(valuePassword(value))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const user ={
      username,
      password
    }
    dispatch(fetchLogin(user))
    
    
    console.log(accessToken)
    console.log(refreshToken)
  }
  return (
    <Container maxWidth="sm" sx={{ borderRadius: 26, border: '1px solid #D6D6D6', height: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="div-form" style={{ margin: 'auto', width: '100%', paddingLeft: '5%' }}>
        <form id="form-user" className="" onSubmit={handleSubmit}>
          <Typography variant="h2" gutterBottom>
            Login
          </Typography>
          <Typography variant="h4" gutterBottom>
            to get started
          </Typography>

          <TextField 
            id="inp-username"
            label="User Name"
            variant="outlined"
            value={username}
            onChange={handleChangeUserName}
            fullWidth
            style={{ height: 50, borderRadius: 10, border: '1px solid #EAEAEA' }}
          />

          <TextField sx={{ mt: 4 }}
            id="inp-password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handleChangePassword}
            fullWidth
            style={{ height: 50, borderRadius: 10, border: '1px solid #EAEAEA' }}
          />

          <Link href="#" sx={{ fontWeight: 500, mt: 2, display: 'block' }} color="text.primary">
            Forgot Password?
          </Link>

          <Button type="submit" variant="contained" sx={{ height: 50, borderRadius: 10, mt: 3 }}>
            Continue
          </Button>

          <Typography variant="body1" align="center" sx={{ mt: 3 }}>
            New User? <Link href="/view/signupPage.html" sx={{ fontWeight: 600 }} color="text.primary">Register</Link>
          </Typography>
        </form>
      </div>
    </Container>
  )
}

export default LoginShop