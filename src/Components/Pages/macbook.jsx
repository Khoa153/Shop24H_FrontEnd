import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import {
    TextField, Button, Grid, Paper,
    Typography, Container, FormGroup,
    FormControlLabel, Checkbox, Card, CardContent,
    CardActions, CardMedia, Row, Col, Switch, Pagination
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchAPIProduct, setCheckbox, listPrice, fetchAPIGetPrice, filterItemPrice, pageChangePagination, fetchAPIGetAllMacbook, addProductToSession } from '../../action/action'
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

import PageIphone from './iphone';
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
const Macbook = () => {
    const dispatch = useDispatch()
    const { macbook, page, limit, currentPage } = useSelector((reduxData) => reduxData.shopReducers)
    const [card, setCard] = useState([])

    useEffect(() => {
        dispatch(addProductToSession())
    }, [])
    useEffect(() => {
        sessionStorage.setItem('Macbook', JSON.stringify(card))
        dispatch(fetchAPIGetAllMacbook())

    }, [])

    const onChangePagination = (event, value) => {
        dispatch(pageChangePagination(value))
    }

    const handleProduct = (value) => {
        const newCard = [...card, value]
        setCard(newCard)
        sessionStorage.setItem('Products', JSON.stringify(newCard))
        console.log(newCard)
    }
    return (
        <div>
            <Grid container spacing={2}>
                {macbook.map((element, index) => (
                    <Grid key={index} item xs={4}>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={element.imageUrl}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {element.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {element.buyPrice}$
                                    <b style={{ color: 'red' }}>     {element.promotionPrice}$</b>
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', mt: 3 }} color="text.secondary">
                                    {element.description}

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleProduct(element)}>Xem Chi Tiết</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}


            </Grid>

            <Grid item lg={12} md={12} sm={12} xs={12} mt={4} style={{ display: "flex", justifyContent: "center" }} >
                <Pagination count={page} page={currentPage} onChange={onChangePagination} variant="outlined" shape="rounded" />
            </Grid>
        </div>
    )
}

export default Macbook