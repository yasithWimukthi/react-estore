import React, { useEffect, useState } from "react";

let res = {};
const PaymentResponse = () => {

    const url_string = window.document.URL;
    const url = new URL(url_string);
    const [response, setResponse] = useState({});

    const querystringValue = url.search.substring(1);

    useEffect(() => {

        decodeURI(querystringValue).split("&").map(item => {
            let v = item.split("=");
            res[v[0]] = v[1];
        })

        setResponse(res);
    }, [])



    return (
        
        <div className="container">
            
            <div className="row table-responsive">
                <table className="table table-sm">
                    
                    {Object.keys(response).map(key => (
                        <tr>
                            <th>{key}</th>
                            <td>{response[key]}</td>
                        </tr>
                    ))}
                </table>
            </div>

        </div>
    )
}

export default PaymentResponse;