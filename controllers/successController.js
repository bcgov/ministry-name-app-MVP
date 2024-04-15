const displaySuccess =  (req, res)=>{
    try{
        console.log(`accessing the success page function displaySuccess`);
        res.render('success');
    }catch (err){
        console.error('Error rendering success (from success controller):', err);
        res.redirect('/error');
    }
};

module.exports = {displaySuccess};
