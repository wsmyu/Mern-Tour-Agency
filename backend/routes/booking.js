import express from 'express'

import {  verifyUser } from '../utils/verifyToken.js'
import { createBooking, getMyBookings } from '../controller/bookingController.js';

const router = express.Router()

router.post('/',verifyUser,createBooking);
router.get('/:id',verifyUser,getMyBookings);


export default router;