import React from 'react'
import './Reviews.css';
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"
const Reviews = () => {
  return (
    <div className='review-container'>
        <div className="layer1">
            <div className="layer2">
                <div className="layer3">
                    <div className="layerFinal">
                        <div className="review">
                            <img src={img1} alt='person1'/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, voluptatum omnis earum rerum magni laboriosam.</p>
                        </div>
                        <div className="review">
                            <img src={img2} alt='person2'/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, voluptatum omnis earum rerum magni laboriosam.</p>

                        </div>
                        <div className="review">
                            <img src={img3} alt='person3'/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, voluptatum omnis earum rerum magni laboriosam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews