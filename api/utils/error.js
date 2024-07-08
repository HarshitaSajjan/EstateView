export const errorHandler = (statusCode, message)=>{
    const error = new Error()
    error.statusCode= statusCode
    error.esage = message
    return error;
}

export const status_header = (statusCode) => {
    return { status: statusCode };
};
