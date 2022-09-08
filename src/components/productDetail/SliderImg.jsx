import React from 'react'

const SliderImg = ({productInfo}) => {

    console.log(productInfo)

    
  return (
    <div className='slider'>
        <button className='slider__prev'></button>
        <div className='slider-interior'>
            {
                productInfo?.productImgs.map((img, index) => (
                    <div className='slider__container-img' key={img}>
                        <img className='slider__img' src={img} alt={`image de ${productInfo.title} ${index}`} />

                    </div>
                ))
            }

        </div>
        <button className='slider__next'>&#62;</button>

    </div>
  )
}

export default SliderImg