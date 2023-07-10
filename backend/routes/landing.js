const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("ayo the landing page is here");
})

module.exports = router;