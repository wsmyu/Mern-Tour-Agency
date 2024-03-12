import Tour from "../model/Tour.js";

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
    });
  }
};

//Update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update. Try again",
    });
  }
};

//delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Try again",
    });
  }
};
//get single tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate('reviews');
    res.status(200).json({
      success: true,
      message: "Successfully found",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};
//get all tours
export const getAllTours = async (req, res) => {
  //for pagintation
  const page = parseInt(req.query.page);
  console.log(page);

  try {
    const tours = await Tour.find({}).populate('reviews')
      .skip(page * 8)
      .limit(8);
    res
      .status(200)
      .json({
        success: true,
        count: tours.length,
        message: "Successfully found",
        data: tours,
      });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

//get tour by search
export const getTourBySearch = async(req,res) =>{
  let city = req.query.city.trim(); 
  const distance = parseInt(req.query.distance)
  const maxGroupSize = parseInt(req.query.maxGroupSize)


  try{
   
    const tours = await Tour.find({ city: new RegExp(city, "i"),distance:{$gte:distance},
    maxGroupSize:{$gte:maxGroupSize}}).populate('reviews');
    console.log('tours:', tours);
    res
    .status(200)
    .json({
      success: true,
      message: "Successfully found",
      data: tours,
    });

    
  } catch (err){
    res.status(404).json({
      success: false,
      message: "not found",
  })
}
}

//get featured tours
export const getFeaturedTour = async (req, res) => {

  try {
    const tours = await Tour.find({featured:true}).populate('reviews').limit(8);

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully found",
        data: tours,
      });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

//get tour counts
export const getTourCount = async (req,res) =>{
  try{
    const tourCount = await Tour.estimatedDocumentCount()
    res.status(200).json({success:true,data:tourCount})
  }catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to fetch",
    });
  }
}