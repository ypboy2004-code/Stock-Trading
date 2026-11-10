import React from 'react';

function Universe() {
    return (
       <div className="container">
        <div className="row text-center">
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platfroms</p>
            <div className="col-4 p-3  mt-5">
                <img src="Media/Images/smallcaseLogo.png"/>
                <p className="text-small text-muted">Thematic investment platfrom</p>
            </div>
           
            <div className="col-4 p-3  mt-5">
                <img src="Media/Images/streak.png" style={{width:"10rem"}}/>
                <p className="text-small text-muted">Systematic trading platfrom</p>
            </div>
 
            <div className="col-4 p-3  mt-5">
                <img src="Media/Images/sensibull.svg" style={{width:"10rem"}}/>
                <p className="text-small text-muted">options trading platfrom</p>       
            </div>
    
              <div className="col-4 p-3 mt-5">
                <img src="Media/Images/zerodhaFundhouse.png" style={{width:"10rem"}}/>
                <p className="text-small text-muted"> our asset managment venture that is creating</p>       
            </div>
              <div className="col-4 p-3 mt-5">
                <img src="Media/Images/tijori.svg" style={{width:"10rem"}}/>
                <p className="text-small text-muted">investment reserch platfrom that offers</p>       
            </div>
              <div className="col-4 p-3 mt-5">
                <img src="Media/Images/ditto.png" style={{width:"10rem"}}/>
                <p className="text-small text-muted">Personalized advice on life and health</p>       
            </div>
            <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}> Signup Now</button>
        </div>
       </div>
    );
}

export default Universe;