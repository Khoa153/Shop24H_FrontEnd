import { Box, Button, Modal, TextField, Typography, Stack } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import {
    hideModalUpdate, fetchAPIUpdateProduct,
    valueName, valueDesp, valueIMAGE, valueBuyPrice, valueAmount, valuePhone, valueStatus, valuePromotion,
} from '../../action/action'
import '../../App.css';
import Swal from 'sweetalert2';


const UpdateModal = () => {
    const dispatch = useDispatch()


    const { product, updateModal, objUpdate } = useSelector((reduxData) => reduxData.shopReducers)
    const [updatedData, setUpdatedData] = useState(null)

    useEffect(() => {
        const state = { ...objUpdate }
        setUpdatedData(state)

    }, [objUpdate])






    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedData({ ...updatedData, [name]: value })
    };

    // var id = objUpdate._id

    const reqUpdateProduct = (e) => {
        dispatch(fetchAPIUpdateProduct(updatedData))
        e.preventDefault()
        hideModal()
    }


    const hideModal = () => {
        dispatch(hideModalUpdate())
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
    return (
        <div>
            <Modal
                open={updateModal}
                onClose={hideModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={reqUpdateProduct}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Name
                        </Typography>
                        <TextField
                            name='name'
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            defaultValue={objUpdate.name}
                            onChange={handleInputChange} />

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Description
                        </Typography>
                        <TextField
                            name='description'
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                            defaultValue={objUpdate.description}
                            onChange={handleInputChange} />

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Image
                        </Typography>
                        <TextField
                            name='imageUrl'
                            id="outlined-basic"
                            label="Image"
                            variant="outlined"
                            defaultValue={objUpdate.imageUrl}
                            onChange={handleInputChange} />

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            BuyPrice
                        </Typography>
                        <TextField
                            name='buyPrice'
                            id="outlined-basic"
                            label="BuyPrice"
                            variant="outlined"
                            defaultValue={objUpdate.buyPrice}
                            onChange={handleInputChange} />

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Promotion Price
                        </Typography>
                        <TextField
                            name='promotionPrice'
                            id="outlined-basic"
                            label="BuyPrice"
                            variant="outlined"
                            defaultValue={objUpdate.promotionPrice}
                            onChange={handleInputChange} />

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Amount
                        </Typography>
                        <TextField
                            name='amount'
                            id="outlined-basic"
                            label="Amount"
                            variant="outlined"
                            defaultValue={objUpdate.amount}
                            onChange={handleInputChange} />

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Phone
                        </Typography>
                        <TextField
                            name='phone'
                            id="outlined-basic"
                            label="Phone"
                            variant="outlined"
                            defaultValue={objUpdate.phone}
                            onChange={handleInputChange} />

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Trạng Thái
                        </Typography>
                        <TextField
                            name='status'
                            id="outlined-basic"
                            label="Trạng Thái"
                            variant="outlined"
                            defaultValue={objUpdate.status}
                            onChange={handleInputChange} />

                        <Stack direction={"row"} spacing={2} marginTop={3} marginLeft={34}>

                            <Button className="button-confirm" variant="contained" type="submit">CONFIRM</Button>
                            <Button className="button-cancel" variant="contained" onClick={hideModal}>CANCEL</Button>
                        </Stack>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default UpdateModal