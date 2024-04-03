import { Box, Button, Modal, TextField, Typography, Stack, Alert } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { hideModalCreate, fecthAPIPostProductAdmin, valueName, valueDesp, valueIMAGE, valueBuyPrice, valueAmount, valuePhone, valueStatus, valuePromotion } from '../../action/action'
import '../../App.css';
import Swal from 'sweetalert2'


const CreateModdal = () => {
    const dispatch = useDispatch()
    const { createModal, name, description, imageUrl, buyPrice, promotionPrice, amount, phone, status } = useSelector((reduxData) => reduxData.shopReducers)

    const hideModal = () => {
        dispatch(hideModalCreate())
    }


    const inputName = (event) => {
        const value = event.target.value
        dispatch(valueName(value))
    }

    const inputDes = (event) => {
        const value = event.target.value
        dispatch(valueDesp(value))
    }

    const inputImg = (event) => {
        const value = event.target.value
        dispatch(valueIMAGE(value))
    }

    const inputPrice = (event) => {
        const value = event.target.value
        dispatch(valueBuyPrice(value))
    }

    const inputPromotion = (event) => {
        const value = event.target.value
        dispatch(valuePromotion(value))
    }

    const inputAmount = (event) => {
        const value = event.target.value
        dispatch(valueAmount(value))
        console.log(value)
    }

    const inputPhone = (event) => {
        const value = event.target.value
        dispatch(valuePhone(value))
    }

    const inputStatus = (event) => {
        const value = event.target.value
        dispatch(valueStatus(value))
    }

    const validate = () => {
        if (!name || !description || !imageUrl || !buyPrice || !promotionPrice || !amount || !phone || !status) {
            alert('Ban chua nhap thong tin ')
            return false
        }

    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        height: 800
    }


    const reqObjProduct = () => {

        if (!name || !description || !imageUrl || !buyPrice || !promotionPrice || !amount || !phone || !status) {
            alert('Chưa điền đủ thông tin')
            return false
        }
        else {
            const newProduct = {
                name, description, imageUrl, buyPrice, promotionPrice, amount, phone, status
            }
            dispatch(fecthAPIPostProductAdmin(newProduct))
            console.log(newProduct)
            hideModal()
            Swal.fire({
                title: "Tạo thành công đơn hàng",
                icon: "success",
                confirmButtonText: 'Hoàn Tất',
            });
            return true
        }
    }


    return (
        <div>
            <Modal
                open={createModal}
                onClose={hideModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Name
                    </Typography>
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={inputName} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Description
                    </Typography>
                    <TextField id="outlined-basic" label="Description" variant="outlined" value={description} onChange={inputDes} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Image
                    </Typography>
                    <TextField id="outlined-basic" label="Image" variant="outlined" value={imageUrl} onChange={inputImg} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        BuyPrice
                    </Typography>
                    <TextField id="outlined-basic" label="BuyPrice" variant="outlined" value={buyPrice} onChange={inputPrice} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Promotion Price
                    </Typography>
                    <TextField id="outlined-basic" label="BuyPrice" variant="outlined" value={promotionPrice} onChange={inputPromotion} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Amount
                    </Typography>
                    <TextField id="outlined-basic" label="Amount" variant="outlined" value={amount} onChange={inputAmount} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Phone
                    </Typography>
                    <TextField id="outlined-basic" label="Phone" variant="outlined" value={phone} onChange={inputPhone} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Trạng Thái
                    </Typography>
                    <TextField id="outlined-basic" label="Trạng Thái" variant="outlined" value={status} onChange={inputStatus} />

                    <Stack direction={"row"} spacing={2} marginTop={3} marginLeft={34}>
                        {/* <div className="confirm-notification">asasd</div> */}
                        <Button className="button-confirm" variant="contained" onClick={reqObjProduct}>CONFIRM</Button>
                        <Button className="button-cancel" variant="contained" onClick={hideModal}>CANCEL</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}

export default CreateModdal