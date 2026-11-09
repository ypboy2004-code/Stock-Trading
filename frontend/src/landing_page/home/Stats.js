import React from 'react';

function Stats(){
    return(
        <div className="container p-3 ">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-2">Trust with confidence</h1>
                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted">That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ lakh crores wroth of equity investments.</p>
                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted">No gimmicks, spam,"gamification", or annoying push notifications. High quality apps that you use at your pace, the way like.</p>
                    <h2 className="fs-4"> The Zerodha Universe</h2>
                    <p className="text-muted">No just an app, but a whole ecosystem. Our investments in 30+fintch strtups ofer you tailored service specific to your needs.</p>
                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted"> with initiatives like Nudge and kill Switch,We don't just facilltate transactions,but actively help you do letter with your money</p>
                    </div>
                
                <div className="col-6">
                    <img src="Media/Images/ecosystem.png" alt="Stats" style={{width:"90%"}} />
                    <div className="text-center">
                        <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href="" style={{textDecoration:"none"}}>Try Kit demo<i class="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;