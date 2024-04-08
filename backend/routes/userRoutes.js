import express from 'express';
const router = express.Router();

// User Login
router.post('/sign-in', (req, res) => {
    res.send('Get all users');
});

router.post('/sign-up', (req, res) => {
    res.send('Get all users');
});


export default router;