
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {
    TextField, Button, Grid, Paper,
    Typography, Container, FormGroup,
    FormControlLabel, Checkbox, Card, CardContent,
    CardActions, CardMedia, Row, Col, Switch, Pagination, Breadcrumbs
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {setFilter} from '../../action/action'
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { Link, Route, Routes, Router } from 'react-router-dom';
import PageIphone from './iphone';
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import CardProduct from './card';
import Macbook from './macbook';
import routes from '../../routes';
import ChangeRoute from './changeRoute';
import Bread from './breadcrumbs';
import Footer from '../../Image/FootesIMG.jpg';
import Logo from '../../Image/LogoHeaders.jpg';
import Phone from '../../Image/Phone.jpg';
import Youtube from '../../Image/instagram.jpg';
import Isntagram from '../../Image/youtube.jpg';
import Facebook from '../../Image/facebook.jpg';
import Twitter from '../../Image/twitter.jpg';
import '../../App.css';

const HeadersLogo = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const { filter } = useSelector((reduxData) => reduxData.shopReducers)


    const handleFilter = (event) => {

    }


    const handleProduct = (value) => {
        console.log(value)
    }


    return (
        <Container>
            <div >
                <div className="d-flex bd-highlight mb-3" style={{ marginRight: '150px', marginLeft: '50px', marginTop: '50px' }}>
                    <div className="me-auto p-2 bd-highlight">
                        <a href="/">    <img className='logo' src={Logo}></img> </a>
                    </div>

                    <div className="icon-head p-2 bd-highlight mt-3"><FontAwesomeIcon icon={faUser} /></div>
                    <div className="icon-head p-2 bd-highlight mt-3"><FontAwesomeIcon icon={faBell} /></div>
                    <a href='/card'><div className="p-2 bd-highlight mt-3"><FontAwesomeIcon icon={faCartShopping} /></div></a>
                </div>


                



                <Container >

                    <Bread />

                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Typography style={{ fontSize: '18px', textAlign: 'center' }} sx={{ ml: 1, mt: 5 }} gutterBottom><b>Apple</b></Typography>
                            <FormGroup >

                                <a href='/Iphone' style={{ textAlign: 'center' }}> <Button color="secondary"> Iphone </Button></a>

                                <a href='/Macbook' style={{ textAlign: 'center' }}> <Button color="secondary"> Macbook </Button></a>
                                <Button color="secondary">Airpod</Button>
                                <Button color="secondary">Macmini</Button>
                                <Button color="secondary">Display</Button>

                            </FormGroup>
                            <Typography style={{ fontSize: '14px' }} sx={{ ml: 1, mt: 5 }} gutterBottom><b>Price</b></Typography>
                            <FormGroup >
                                <FormControlLabel style={{ color: '#9c27b0' }} control={<Checkbox />} label="50 - 100 ($)" />
                                <FormControlLabel style={{ color: '#9c27b0' }} control={<Checkbox />} label="101 - 150 ($)" />
                                <FormControlLabel style={{ color: '#9c27b0' }} control={<Checkbox />} label="151 - 200 ($)" />
                                <FormControlLabel style={{ color: '#9c27b0' }} control={<Checkbox />} label="201 - 250 ($)" />
                                <FormControlLabel style={{ color: '#9c27b0' }} control={<Checkbox />} label="251 ~ ($)" />
                            </FormGroup>


                        </Grid>
                        <Grid item xs={9} >
                            <ChangeRoute />

                        </Grid>
                    </Grid>
                </Container>



                <div style={{ border: '1px solid #CCC', marginTop: '50px' }}></div>

                <div className='container mt-4 ' style={{ border: '#F0F8FF' }}>
                    <div className='row ' >
                        <div className='col-sm-3 text-center' style={{ fontSize: '14px' }}>
                            <h3>Hỗ trợ khách hàng</h3>

                            <div className='title-1'>
                                <img src={Footer} className='item-footer' />
                                <a href='#' className='a-link'>  <p className='p-delivery'>Kiểm tra đơn hàng</p></a>
                            </div>

                        </div>
                        <div className='col-sm-3 text-center' style={{ fontSize: '14px' }}>
                            <h3>Liên Hệ</h3>
                            <div className='title-2'>
                                <img src={Phone} className='item-footer-2' />
                                <a href='#' className='a-link'>  <p className='p-contact'>1800xxxx</p> </a>
                            </div>
                        </div>
                        <div className='col-sm-3 text-center' style={{ fontSize: '14px' }}>

                        </div>
                        <div className='col-sm-3 mb-5'>
                            <h3 className='social'>Contact Social</h3>
                            <div className='item-social'>
                                <img className='box-item-social' src={Youtube} alt='logo' />
                                <img className='box-item-social' src={Facebook} alt='logo' />
                                <img className='box-item-social' src={Isntagram} alt='logo' />
                                <img className='box-item-social' src={Twitter} alt='logo' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default HeadersLogo