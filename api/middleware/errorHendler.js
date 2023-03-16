// Create custome error hendler middleare...
export const errorHendler = (error,req,res,next) =>{
    const errorMessage = error.message || "Unknown Error"
    const errorStatus = error.status || 500
    return res.status(errorStatus).json({
        message : errorMessage,
        status : errorStatus
    })
}