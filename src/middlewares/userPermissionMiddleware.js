async function checkUserPermission (req, res, next){
    const { user } = req;
    if(user.role === 'admin'){
        next();
    }else{
        res.status(403).json({message: 'You are not allowed to access this resource'});
    }
}