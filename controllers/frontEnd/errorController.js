
// render error page
const displayError = (req, res)=>{
    try{
        console.log(`access error router: dispayError`);
        res.render('error');
    }catch (err){
        console.error('Error rendering success (from success controller):', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {displayError};