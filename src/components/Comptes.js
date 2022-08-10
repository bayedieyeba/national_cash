import React from 'react'
import image1 from '../images/image1.png';
const Comptes = () => {
    return (
        <>
            <div className="d-flex justify-content-between p-3 mr-3" style={{backgroundColor:'blue'}}>
                    <div><p className='m-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                    <div><img src={image1} style={{height:'500px',width:'500px'}} alt="" /></div>
            </div>
             <div className="d-flex justify-content-between p-3 mr-3" style={{backgroundColor:'blue'}}>
                   <div><img src={image1} style={{height:'500px',width:'500px'}} alt="" /></div>
                   <div><p className='m-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
            </div>
            <div className="d-flex justify-content-between p-3 mr-3" style={{backgroundColor:'blue'}}>
                    <div><p className='m-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                    <div><img src={image1} style={{height:'500px',width:'500px'}} alt="" /></div>
            </div>    
        </>
    )
}
export default Comptes