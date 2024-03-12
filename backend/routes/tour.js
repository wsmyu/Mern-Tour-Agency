import express from 'express'
import {createTour, deleteTour, getAllTours, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour} from './../controller/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router()

//create new tour
router.post('/',createTour);
//update tour
router.put('/:id',verifyAdmin,updateTour);
//delete  tour
router.delete('/:id',verifyAdmin,deleteTour);
//get single new tour
router.get('/:id',getSingleTour);
//get all tours
router.get('/',getAllTours);
//get tour by search
router.get('/search/getTourBySearch',getTourBySearch);
router.get('/search/getFeaturedTours',getFeaturedTour);
router.get('/search/getTourCount',getTourCount);


export default router;