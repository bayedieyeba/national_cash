import React from 'react';
import Carousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import back from '../images/back.png';
import backService from '../images/backService.png';
import Item from './Item';
const Creusol =()=>{
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
    return(
        
        <>
        <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
            
          </Carousel>
        </div>
      </>
    )
}
export default Creusol