// Custom error....
export const customError = (ErrorMessage,ErrorStatus) =>{
    // Error init...from js..
    const cError = new Error();
    cError.message = ErrorMessage;
    cError.status = ErrorStatus;
    return cError;
}