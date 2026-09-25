import React, { useState } from 'react'
import Review from './Review';

const App = () => {

    const reviewList = [{
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);


    const handlePrev = () => {

        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
        console.log(currentIndex)

    }

    const handelNext = () => {
        setCurrentIndex((prev) => (prev < reviewList.length - 1 ? prev + 1 : prev))
        console.log(currentIndex)
    }

    const handleRandom=()=>{

        if(reviewList.length <= 1) return null

        let randomIndex = currentIndex;

        while(randomIndex === currentIndex){

            randomIndex = Math.floor(Math.random()*reviewList.length)
        }
        setCurrentIndex(randomIndex)

        console.log(randomIndex)
        
    }



    return (
        <div style={{ margin: '20px auto', textAlign: 'center', maxWidth: '400px' }}>
            <h1 id="review-heading">Our Review</h1>
            <div className='review'>
                {reviewList.map((review, index) => (
                    <Review key={review.id} review={review} isHidden={index !== currentIndex} />
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <button onClick={handlePrev} disabled={currentIndex === 0}>Prev</button>
                <span style={{ margin: '0 15px' }}>
                    {currentIndex + 1} of {reviewList.length}
                </span>
                <button onClick={handelNext} disabled={currentIndex === reviewList.length - 1}>Next</button>
            </div>
            <div style={{marginTop:'20px'}}>
                <button onClick={handleRandom} >suprise me</button>
            </div>
        </div>
    )
}

export default App