import axios from "axios";
import * as actionTypes from "./types";

export const addCartItem = (data) => async (dispatch) => {

    dispatch(_addCartItem(data));
}

export const _addCartItem = (data) => {

    return {
        type: actionTypes.ADD_CART_ITEM,
        data
    }
}

export const removeCartItem = data => async dispatch => {

    dispatch(_removeCartItem(data));
}

export const _removeCartItem = data => {
    return {
        type: actionTypes.REMOVE_CART_ITEM,
        data
    }
}

export const payment = (objPay) => async dispatch => {

    await axios({
        method: 'post',
        url: 'http://localhost:5000/api/pay',
        data: objPay
    }).then(res => {

        console.log(res);

        launchPaymentDialog(res.data.params);



    })

}

const launchPaymentDialog = (payParams) => {

    const bolt = window.bolt;
    console.log(bolt, payParams);
    bolt.launch({
        hash: payParams.hash,
        txnid: payParams.txnid.toString(),
        key: payParams.key,
        amount: payParams.amount,
        firstname: payParams.firstname,
        email: payParams.email,
        phone: payParams.phone,
        productinfo: payParams.productinfo,
        surl: payParams.surl,
        furl: payParams.furl,
        lastname: payParams.lastname,
        country: payParams.country,
        zipcode: payParams.zipcode,
        udf1: payParams.udf1,
        udf2: payParams.udf2,
        udf3: payParams.udf3,
        udf4: payParams.udf4,
        udf5: payParams.udf5,
        pg: payParams.pg


    }, {
        responseHandler: async (BOLT) => {
            console.log("RESPONSE", BOLT.response);
            let queryString = "provider=PAYU&";
            Object.entries(BOLT.response).forEach(([key, value]) => {
                queryString += key + "=" + value + "&"
            })

            queryString = queryString.slice(0, -1);

            window.location.href = `http://localhost:3000/estore/paymentresponse?${queryString}`;

        },
        catchException: (BOLT) => {
            console.log("ERROR", BOLT.message);
        }
    })



}