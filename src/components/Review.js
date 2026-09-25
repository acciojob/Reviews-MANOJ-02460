import React, { useState } from 'react'
import '../styles/App.css'
const Review = (props) => {

    const { review,  isHidden} = props

    const {id, image, name, job, text } = review;

    if (isHidden) return null

    return (
        <div className='review-container'>

            <img src={image} className='person-img' />
            <h1 className='author' id='author-id'>{id}{" "}{name}</h1>
            <h4 className='job'>{job}</h4>
            <p className='info'>{text}</p>

        </div>
    )
}

export default Review