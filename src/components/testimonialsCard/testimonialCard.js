import React from "react";
import { Carousel } from "react-responsive-carousel";


const TestimonailCard = () => {
    return (
        <>
            <div className="main contact-margin-top" id="contact">
                <div className="contact-div-main">
                    <div className="contact-header">
                        <h1 className="heading contact-title">Testimonials</h1>
                    </div>
                </div>
            </div>
            <Carousel autoPlay infiniteLoop showStatus={false}>
                <div>
                    <h4>I loooove final work, my vision came to life and I am so happy I have chosen to work with you.</h4>
                    <p style={{ paddingBottom: '20px' }}>bibi1401 - France</p>
                </div>
                <div>
                    <h4>Good work. Keep it up.</h4>
                    <p style={{ paddingBottom: '20px' }}>Prince Moyo - Canada</p>
                </div>
                <div>
                    <h4>Vinay is passionate about the work that he gets committed which I clearly understood in my requirement. He goes the extra mile to think about what can be done to simplify the work process. I will come back to him for another requirement shortly. I highly recommend him for any mobile app development requirements.</h4>
                    <p style={{ paddingBottom: '20px' }}>Santosh Kumar - India</p>
                </div>
                <div>
                    <h4>Great job Thank you!</h4>
                    <p style={{ paddingBottom: '20px' }}>Ramon Rajos - USA</p>
                </div>
                <div>
                    <h4>je recommande</h4>
                    <p style={{ paddingBottom: '20px' }}>Bayika - France</p>
                </div>

            </Carousel>
        </>
    )
}

export default TestimonailCard