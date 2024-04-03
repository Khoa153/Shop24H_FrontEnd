
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { red } from '@mui/material/colors';
import '../../App.css';
import HeaderLogo from './headersLogo'
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
const Total = () => {
    const data = JSON.parse(sessionStorage.getItem('Products'))

    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(0)
    const [remove, setRemove] = useState(data)
    useEffect(() => {
        totalProduct()
        
    }, [remove])



    const onCLickClearSession = () => {
        setRemove(sessionStorage.removeItem('Products'))
        
    }


    const removeProduct = (product) => {
        const filtetUpdate = data.filter(item => item._id !== product._id)
        sessionStorage.setItem('Products', JSON.stringify(filtetUpdate))
        setRemove([...filtetUpdate])
        console.log(filtetUpdate);
    }

    const addQuantity = (product) => {
        
        
        const result = remove.filter(item => item._id === product._id)
        if(result){
            setQuantity(quantity + 1)
        }
        console.log(result);
    }

    const minusQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const totalProduct = () => {
        // let total = 0
        // cart.map((item) => {
        //     total += item.promotionPrice * item.amount
        // })
        // setCart(total)
    }

    return (

        <div className='container'>
            <div className='flex-product-total'>
                <div className='products'><p >Products</p></div>

                <div className='total'>
                    <p>Price</p>
                    <p>Quantity</p>
                    <button onClick={() => onCLickClearSession()} type='button' className='button-clear'><MdDeleteForever /></button>
                </div>
            </div>

            <div className='hr'></div>

            {/* Load Session for Card */}
            {remove && remove.length > 0 ? (remove.map((element, index) => (

                <div className='detail-product' key={index} >

                    <div className='set-1' >
                        <div ><img className='image' src={element.imageUrl} alt='logo'></img></div>

                        <div className='nameProducts'>
                            {element.name}
                        </div>
                    </div>


                    <div className='set-2'>

                        <p>{element.promotionPrice * quantity}$</p>
                        <div className='quantity-count'>
                            <button type='button' onClick={() => minusQuantity()} className='button-count'>-</button>
                            <input type='text' className='input-count' value={quantity} readOnly={true} />
                            <button type='button' onClick={() => addQuantity(element)} className='button-count'>+</button>
                        </div>
                        <button className='button-remove' onClick={() => removeProduct(element)}><FaDeleteLeft /></button>

                    </div>

                </div>

            ))
            )
                : <div className=''>
                    <p className='p-product-session'>Giỏ hàng của bạn đang trống</p>

                    <a href='/' className='button-back-store'><p className='p-back-home'>Quay lại mua sắm</p></a>
                </div>

            }


            <div className='hr'></div>

            {/*Payment */}
            <div className='flex-total'>
                <div className='clear-card'>

                </div>

                <div className='sub-price'>
                    <div className='flex-sub'>
                        <div className='p-total'>Subtotal</div>
                        <div className='p-price'>{total} $</div>
                    </div>
                    <p className='p-calculate'>Shipping and calculate at checkout</p>
                    <button className='button-total'>Confirm</button>
                </div>
            </div>
        </div>

    )
}

export default Total