import express from 'express'
const router = express.Router();

router.get('', (req, res) => {
    res.send('Hey There Dev');
})


export default router;