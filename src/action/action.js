import { USER_NAME_SUCCESS, PASSWORD_SUCCESS, CONFIRM_PASSWORD_SUCCESS, CREATE_USER_SUCCESS, LOGIN_USER_SUCCESS, ISLOADING_PRODUCT, PRODUCT_SUCCESS } from '../constant/constant'
import shopReducers from '../reducers/shopReducers'
import { useEffect, useState } from "react";

/*API GET ALL PRODUCT */
export const fetchAPIProduct = (page, limit) => {
    return (dispatch) =>
        fetch(`http://localhost:8080/pagination?page=${page}&limit=${limit}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                return dispatch({
                    type: PRODUCT_SUCCESS,
                    page: data.length,
                    totalProduct: data.filter(
                        (_, index) => index = Math.ceil(data.length / (page - 1) * limit)
                    ),
                });
            })
            .catch((error) => {
                return dispatch({
                    type: "PRODUCT_ERORR",
                    error: error,
                });
            })
}
// try {
//     var reqProdcut = {
//         method: 'GET',

//     }
//     dispatch({
//         type: ISLOADING_PRODUCT
//     })
//     const resProduct = fetch('http://localhost:8080/product', reqProdcut)

//     const data = resProduct.json()

//     const dataProduct = data.data

//     const resPagination = fetch(`http://localhost:8080/pagination?page=${page}&limit=${limit}`, reqProdcut)

//     const dataPagination = resPagination.json()
//     console.log(dataProduct)
//     // const result = dataProduct.filter((item) => item.description.toLowerCase().includes())
//     return dispatch({
//         type: PRODUCT_SUCCESS,
//         data: dataProduct.length,
//         totalProduct: dataPagination,
//     })

// } catch (error) {
//     return dispatch({
//         type: "PRODUCT_ERORR",
//         error: error
//     })
// }


// GET ALL IPHONE
export const fetchAPIGetAllIphone = () => {
    return (dispatch) =>
        fetch("http://localhost:8080/iphone")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                return dispatch({
                    type: 'GET_ALL_IPHONE',
                    dataIphone: data.data,
                })
            })
            .catch((error) => {
                return dispatch({
                    type: 'IPHONE_ERROR',
                    error: error
                })
            });
}

// GET ALL MACBOOK
export const fetchAPIGetAllMacbook = () => {
    return (dispatch) =>
        fetch('http://localhost:8080/macbook')
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                return dispatch({
                    type: 'GET_ALL_MACBOOK',
                    dataMacbook: result.data
                })
            })
            .catch((error) => {
                return dispatch({
                    type: 'MACBOOK_ERROR',
                    error: error
                })
            })

}
/* ADMIN */

export const fecthAPIPostProductAdmin = (product) => {
    return async (dispatch) => {
        try {
            var reqPostProduct = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }

            const resPostProduct = await fetch("http://localhost:8080/product", reqPostProduct)

            const dataPostProduct = await resPostProduct.json()

            return dispatch({
                type: 'POST_PRODUCT',
                data: dataPostProduct
            })


        } catch (error) {
            return dispatch({
                type: 'POST_PRODUCT_ERROR',
                error: error
            })
        }
    }
}

export const fetchAPIUpdateProduct = (product) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(product);

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    const resUpdate = fetch(`http://localhost:8080/product/${product._id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

    return {
        type: 'PUT_PRODUCT',
        payload: []
    }
}


export const fetchAPIDeleteProduct = (id) => {
    return async (dispatch) => {
        try {
            var reqDelete = {
                method: 'DELETE'
            }

            const resDelete = await fetch(`http://localhost:8080/product/${id}`, reqDelete)

            const dataDelete = await resDelete.json()

            return dispatch({
                type: 'DELETE_PRODUCT',
                data: dataDelete
            })
        } catch (error) {
            return dispatch({
                type: 'DELETE_PRODUCT_ERROR',
                error: error
            })
        }
    }
}


export const pageChangePagination = (page) => {
    return {
        type: 'PAGE_CHANGE_PAGINATION',
        payload: page
    }
}



/* Login And Signup */
export const fetchSignUp = (signup) => {
    return async (dispatch) => {
        try {
            var reqSign = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signup)
            }

            const resUser = await fetch('http://localhost:8080/auth/signup', reqSign)

            const data = await resUser.json()
            return dispatch({
                type: CREATE_USER_SUCCESS,
                data: data
            })
        } catch (error) {
            return dispatch({
                type: "SIGNUP_USER_ERORR",
                error: error
            })
        }
    }
}


export const fetchLogin = (login) => {
    return async (dispatch) => {
        try {
            var reqLogin = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(login)
            }

            const resUser = await fetch('http://localhost:8080/auth/login', reqLogin)

            const data = await resUser.json()
            sessionStorage.setItem('accessToken', data.accessToken)
            sessionStorage.setItem('refreshToken', data.refreshToken)
            sessionStorage.setItem('exp', data.expiredDate)
            dispatch(setAccessToken(data.accessToken));
            dispatch(setRefreshToken(data.refreshToken));
            return dispatch({
                type: LOGIN_USER_SUCCESS,
                data: data,

            })
        } catch (error) {
            return dispatch({
                type: "LOGIN_USER_ERORR",
                error: error
            })
        }
    }
}

export const addBreadCums = (breadcrumbs) => {
    return {
        type: 'ADD_BREADCUMS',
        payload: breadcrumbs
    }
}

export const removeBreadCums = () => {
    return {
        type: 'REMOVE_BREADCUMS'
    }
}

export const clearBreadCums = () => {
    return {
        type: 'CLEAR_BREADCUMS',

    }
}

export const setExpiredDate = (expiredDate) => {
    return {
        type: 'SET_EXPIREDDATE',
        payload: expiredDate
    }
}

export const setAccessToken = (accessToken) => {
    return {
        type: 'SET_ACCESS_TOKEN',
        payload: accessToken,
    }
}

export const setRefreshToken = (refreshToken) => {
    return {
        type: 'SET_REFRESH_TOKEN',
        payload: refreshToken,
    }
}


export const valueUserName = (value) => {
    return {
        type: USER_NAME_SUCCESS,
        payload: value
    }
}

export const valuePassword = (value) => {
    return {
        type: PASSWORD_SUCCESS,
        payload: value
    }
}

export const valueConfirmPassword = (value) => {
    return {
        type: CONFIRM_PASSWORD_SUCCESS,
        payload: value
    }
}

export const listPrice = (price) => {
    return {
        type: 'FILTER_PRICE',
        payload: price
    }
}


export const arrayProduct = (session) => {
    return {
        type: 'SESSION_PRODUCT',
        payload: session
    }
}

export const eventClickTotal = () => {
    return {
        type: 'CLICK_COUNT'
    }
}

export const addProductToSession = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_SESSION',
        payload: product
    }
}

export const showModalCreate = () => {
    return {
        type: 'SHOW_MODAL',

    }
}

export const hideModalCreate = () => {
    return {
        type: 'HIDE_MODAL'
    }
}


/* ADMIN */

export const valueName = (name) => {
    return {
        type: 'NAME_VALUE',
        payload: name
    }
}

export const valueDesp = (value) => {
    return {
        type: 'DES_VALUE',
        payload: value
    }
}


export const valueIMAGE = (value) => {
    return {
        type: 'IMAGE_VALUE',
        payload: value
    }
}


export const valueBuyPrice = (value) => {
    return {
        type: 'PRICE_VALUE',
        payload: value
    }
}

export const valuePromotion = (value) => {
    return {
        type: 'PROMOTION_VALUE',
        payload: value
    }
}

export const valueAmount = (value) => {
    return {
        type: 'AMOUNT_VALUE',
        payload: value
    }
}

export const valuePhone = (value) => {
    return {
        type: 'PHONE_VALUE',
        payload: value
    }
}

export const valueStatus = (value) => {
    return {
        type: 'STATUS_VALUE',
        payload: value
    }
}



/* Modal Update  Admin*/
export const showModalUpdate = () => {
    return {
        type: 'SHOW_MODAL_UPDATE'

    }
}

export const hideModalUpdate = () => {
    return {
        type: 'HIDE_MODAL_UPDATE'
    }
}

export const updateObj = (value) => {
    return {
        type: 'UPDATE_OBJ',
        payload: value
    }
}



/* Filter */

export const filterAdmin = (value) => {
    return {
        type: 'FILTER_ORDER',
        payload: value
    }
}
