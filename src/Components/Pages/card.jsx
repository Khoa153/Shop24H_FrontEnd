import {
    TextField, Button, Grid, Paper,
    Typography, Container, FormGroup,
    FormControlLabel, Checkbox, Card, CardContent,
    CardActions, CardMedia, Row, Col, Switch, Pagination, Breadcrumbs
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchAPIProduct, addProductToSession, filterItemPrice, pageChangePagination } from '../../action/action'
import Swal from 'sweetalert2'
import Total from './totalProduct';
const CardProduct = () => {
    const [cart, setCart] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        sessionStorage.setItem('Products', JSON.stringify(cart))
    }, [cart])

    const { product, page, limit, currentPage, filter } = useSelector((reduxData) => reduxData.shopReducers)

    useEffect(() => {
        dispatch(fetchAPIProduct(currentPage, limit))


    }, [currentPage])

    const onChangePagination = (event, value) => {
        dispatch(pageChangePagination(value))
    }

    const handle = (value) => {
        const newCard = [...cart, value]
        const id = value._id
        const storedProducts = sessionStorage.getItem('Products')
        const storedProductArray = storedProducts ? JSON.parse(storedProducts) : []

        if (storedProductArray.some(item => item._id === id)) {
            Swal.fire({
                title: "Sản phẩm đã có trong giỏ hàng",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
            });
        } else {
            const updateProduct = [...storedProductArray, value]
            sessionStorage.setItem('Products', JSON.stringify(updateProduct))
            setCart(newCard)
            Swal.fire("Đã Thêm Vào Giỏ")
            return true
        }
    }

    const handleDetail = (value) => {
        sessionStorage.setItem('Detail', JSON.stringify(value))
        console.log(value)
    }

    return (
        <div>
            <div className="form-seach">
                <input className='input-seach' type='text' placeholder='Seach' />
                <label className='form-label'>Seach</label>
            </div>


            <Grid container spacing={2}>
                {product.map((element, index) => (
                    <Grid key={index} item xs={4}>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={element.imageUrl}
                                title="green iguana"
                            />
                            <CardContent>
                                <a className='a-router-card' href='/Detail' onClick={() => handleDetail(element)}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {element.name}
                                    </Typography>
                                </a>
                                <Typography variant="body2" color="text.secondary">
                                    {element.buyPrice}$
                                    <b style={{ color: 'red' }}>     {element.promotionPrice}$</b>
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', mt: 3 }} color="text.secondary">
                                    {element.description}

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handle(element)}>Add to Cart</Button>
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

export default CardProduct