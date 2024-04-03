import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { star } from '@fortawesome/free-solid-svg-icons'
const Detail = () => {

    const data = JSON.parse(sessionStorage.getItem('Detail'))
    console.log(data)
    return (
        <div className='flex-detail'>
            <div className='detail-product'>
                <div className='image'>
                    <img className='img-detail' src={data.imageUrl} />
                    <hr className='hr-detail' />
                    <b className='p-deital'>Mua máy bạn sẽ được hỗ trợ</b>
                    <p className='p-deital'>✔️Trả góp 0% qua thẻ tín dụng.</p>
                    <p className='p-deital'>✔️Trả góp lãi suất thấp qua các công ty Tài chính</p>
                    <p className='p-deital'>✔️Trả góp lãi suất thấp qua các công ty Tài chính</p>
                    <p className='p-deital'>✔️Thời gian giao hàng nhanh chóng</p>
                    <p className='p-deital'>✔️Thời gian giao hàng nhanh chóng</p>
                    <p className='p-deital'>✔️Thời gian giao hàng nhanh chóng</p>
                </div>


            </div>

            <div className='information'>
                <div className='price'>
                    <div className='detail-name'>{data.name}</div>
                    <p className='buy'>Giá bán</p>
                    <p className='total-buy'><b>{data.buyPrice}$</b> <s>{data.promotionPrice}$</s></p>
                    <div className='note'>
                        <div className='container-discount'><p className='p-discount'>Khuyến mãi khi mua {data.name}</p></div>
                        <p className='note-discount'>TẶNG BẢO HÀNH 12 THÁNG 1 ĐỔI 1</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Detail