import React from 'react';

function Brokerage() {
    return ( 
            <div className="container mt-5" >
            <div className="row boder-bottom text-center">
                <h1>Pricing</h1>
                <h3 className="text-muted border-top">Free eqity investments and flat &#8377;20 traday and F&Q trades </h3>
            </div>
            <div className="row p-5 mt-5">
                <div className="col-8 p-4">
                    <a href="" style={{ textDecoration:"none"}}>
                    <h3 className="fs-5">Brokerage calculator</h3>
                    </a>
                    <ul style={{textAlign:"left",lineheight:"2.5",fontSize:"12px"}} className="text-muted">
                        <li>
                            Call & Trade and RMS auto-sqareoff:Additional charges of &#8377;50 + GST per order
                        </li>
                        <li>
                            Digital contract notes will be sent via w-mail.
                        </li>
                        <li>
                            Physcial copies of contract notes, if required,shall be charged &#8377;20 per contract note. Couier charges apply.
                        </li>
                        <li>
                            For NRI account (PIS) , 0.5% or &#8377;20 per executed order for equity (wichever is lower).
                        </li>
                        <li>
                            If the account is in debit balance,any order placed will be charge insted og &#8377;20 per executed order.
                        </li>
                    </ul>
                    
                </div>
                <div className="col-4 p-4">
                    <a href="" style={{ textDecoration:"none"}}>
                    <h3 className="fs-5">List of charges</h3>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;