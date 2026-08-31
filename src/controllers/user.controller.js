const registerUser=async(req,res)=>{
    try{
    res.status(500).json({
        message:"Success"
    });
}
catch(error){
    res.status(500).json({
        message:error.message
    });
}
}

export { registerUser };