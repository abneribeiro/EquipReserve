const User = require('../models/User'); // Import the User model

async function checkUserExistence (req, res, next){
    const { id } = req.params;

    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        return res.status(400).json({message: 'Invalid user id'});
    }
    try {
        const user = await User.findById(id);
        if(user){
            req.user = user;
            next();
        }else{
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: 'Internal server error', error: error.message});
    }
    
}

module.exports = checkUserExistence;