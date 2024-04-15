const displayError = (req, res)=>{
    console.log(`access error router: dispayError`);
    res.render('error');
};

module.exports = {displayError};