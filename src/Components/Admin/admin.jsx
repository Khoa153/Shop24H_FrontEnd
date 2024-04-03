import { useDispatch, useSelector } from "react-redux"
import {
    Select, MenuItem, Button, CircularProgress, Container, Grid,
    Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Modal
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchAPIProduct, showModalCreate, pageChangePagination, showModalUpdate, updateObj, fetchAPIDeleteProduct, filterAdmin } from '../../action/action'
import '../../App.css';

import CreateModdal from "./createModal";
import UpdateModal from "./updateModal";
const Admin = () => {
    const dispatch = useDispatch()
    const { product, page, limit, currentPage, isLoading } = useSelector((reduxData) => reduxData.shopReducers)

    const [record, setRecord] = useState()

    useEffect(() => {
        dispatch(fetchAPIProduct(currentPage, limit))
    }, [currentPage])
    useEffect(() => {
        setRecord([...product])
    }, [product])


    const handleShow = (value) => {
        console.log(value)
        dispatch(showModalUpdate())
        dispatch(updateObj(value))

    }


    const deleteOrder = (value) => {
        console.log(value)
        dispatch(fetchAPIDeleteProduct(value))
        window.location.reload()

    }

    const onChangePagination = (event, value) => {
        dispatch(pageChangePagination(value))
    }

    const onShowModalCreate = () => {
        dispatch(showModalCreate())
    }
    // const filteredData = product.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    const handleSeachChange = (e) => {
        setRecord(product.filter((item) => item.name.toLowerCase().includes(e.target.value)))
    }


    return (

        <Container>
            <Grid container mt={5}>
                <div className="header-admin">
                    <h1 className="h1-order">Danh sách đơn hàng </h1>
                    <button className="button-create" type="button" onClick={onShowModalCreate}>Tạo đơn hàng</button>
                </div>

                <div className="form-seach">
                    <input className='input-seach' type='text' placeholder='Seach' onChange={handleSeachChange} />
                    <label className='form-label'>Seach</label>
                </div>

                {record?.length === 0 ? (
                    <Grid item lg={12} md={12} sm={12} xs={12} textAlign="center">
                        <CircularProgress />
                    </Grid>
                ) : (
                    <Grid >
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Name</TableCell>
                                        <TableCell align="left">Description</TableCell>
                                        <TableCell align="left">Image</TableCell>

                                        <TableCell align="left">BuyPrice</TableCell>

                                        <TableCell align="center">Amount</TableCell>

                                        <TableCell align="center">Phone</TableCell>
                                        <TableCell align="center">Trạng Thái</TableCell>

                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {record?.map((element, index) => (
                                        <TableRow
                                            key={index}
                                        >
                                            <TableCell align="left">{element.name}</TableCell>
                                            <TableCell align="left">{element.description}</TableCell>
                                            <TableCell align="left"><img src={element.imageUrl} style={{ width: '80px', height: '50px' }} /></TableCell>
                                            <TableCell align="left">{element.buyPrice}</TableCell>
                                            <TableCell align="left">{element.amount}</TableCell>

                                            <TableCell align="left">{element.phone}</TableCell>
                                            <TableCell align="left">{element.status}</TableCell>
                                            <TableCell align="center"><Button onClick={() => handleShow(element)}>Chi tiết</Button></TableCell>
                                            <TableCell align="center"><Button onClick={() => deleteOrder(element._id)}>Delete</Button></TableCell>
                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                )}

                <Grid item lg={12} md={12} sm={12} xs={12} mt={4} style={{ display: "flex", justifyContent: "center" }} >
                    <Pagination count={page} page={currentPage} onChange={onChangePagination} variant="outlined" shape="rounded" />
                </Grid>


                <CreateModdal
                    onShowModalCreate={onShowModalCreate} />

                <UpdateModal
                    handleShow={handleShow}
                />

            </Grid>
        </Container>

    )
}

export default Admin