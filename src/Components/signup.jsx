
import { Container, Typography, TextField, Checkbox, Button } from '@mui/material';
import { fetchSignUp, valueUserName, valuePassword, valueConfirmPassword } from '../action/action'
import useHistory from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const SignupPage = () => {
    const dispatch = useDispatch()
    
    const { username, password, confirmpassword } = useSelector((reduxData) => reduxData.shopReducers)

    const handleSignup = () => {
        const user = {
            username,
            password,
            confirmpassword
        }
        dispatch(fetchSignUp(user))
        // history.push()
        console.log(user)
    }

    const handleChangeUserName = (event) => {
        const value = event.target.value
        dispatch(valueUserName(value))
    }

    const handleChangePassword = (event) => {
        const value = event.target.value
        dispatch(valuePassword(value))
    }

    const handleChangeConfirmPassword = (event) => {
        const value = event.target.value
        dispatch(valueConfirmPassword(value))
    }

    return (
        <Container maxWidth="sm" sx={{ borderRadius: 26, border: '1px solid #D6D6D6' }}>
            <div className="div-form mx-auto w-100 pl-5">

                <Typography variant="h4" sx={{ mt: 5 }}>
                    Signup
                </Typography>
                <Typography variant="h6" sx={{ mt: 1 }}>
                    to get started
                </Typography>
                <TextField
                    id="inp-username-signup"
                    label="Username"
                    value={username}
                    onChange={handleChangeUserName}
                    fullWidth
                    sx={{ mt: 5, borderRadius: 10, border: '1px solid #EAEAEA' }}
                />

                <TextField
                    id="inp-password-signup"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    fullWidth
                    sx={{ mt: 2, borderRadius: 10, border: '1px solid #EAEAEA' }}
                />
                <TextField
                    id="inp-confirm-password-signup"
                    label="Confirm Password"
                    type="password"
                    value={confirmpassword}
                    onChange={handleChangeConfirmPassword}
                    fullWidth
                    sx={{ mt: 2, borderRadius: 10, border: '1px solid #EAEAEA' }}
                />

                <div className="form-group row">
                    <div className="col-sm-10">
                        <div className="form-check">
                            <Checkbox id="gridCheck1" />
                            <label htmlFor="gridCheck1">
                                Agree to Our terms and Conditions
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 mt-3">
                        <Button variant="contained" fullWidth sx={{ borderRadius: 10, height: 50 }} onClick={handleSignup}>
                            Continue
                        </Button>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 text-center mt-3">
                        <p>
                            Already registered?
                            <a className="text-dark" style={{ fontWeight: 600 }} href="">
                                Login
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default SignupPage