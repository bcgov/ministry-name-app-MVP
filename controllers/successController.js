const asyncHandler = require("express-async-handler");

const displaySuccess =  asyncHandler(async(req, res)=>{
    try{
        console.log(`accessing the success page function displaySuccess`);
        res.render('success');
    }catch (err){
        console.error('Error rendering success (from success controller):', err);
    }

});

module.exports = {displaySuccess};
