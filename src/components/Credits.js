import React from 'react'
import Footer from './Footer';
import ServiceLeft from './ServiceLeft';
import ServiceRight from './ServiceRight';
const Credits = () => {
    
    return (
        <>
                <div style={{
                    padding:"100px",
                    backgroundSize: "cover",
                    backgroundColor:"#F5F5DC"
                    }}>
                    
                            <ServiceLeft />
                            <hr />
                            <ServiceRight />
                            <hr />
                            <ServiceLeft /> 
                            <hr />
                            <ServiceRight />
                            <hr />
                            <ServiceLeft />
                            <hr />
                            <ServiceLeft />
                            <hr />
                            <ServiceLeft />
                </div>
            <Footer />
        </>
    )
}
export default Credits