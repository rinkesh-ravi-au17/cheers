const express = require('express');
const router = require(express.Router);

const movies = [
    {
        movie : "sherlock Holmes",
        rating : 4,
        release_date : 22/05/15,

    }
]

router.get('/',(req, res)=>{
    res.send('Hello')
})

router.post('/', (req,res)=>{
    const movie = req.body;
    movie.push(movie)
})
export default router