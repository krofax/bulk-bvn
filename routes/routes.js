const express = require('express');
const router = express.Router();

router
    .post("/", async(req, res) => {
        res.json('Bulk API endpoint')
    })

    

module.exports = router;