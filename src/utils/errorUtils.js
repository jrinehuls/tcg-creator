
function getErrorResponse(error) {
    const status = error.response.status ?? null
    if (status >= 400 && status < 500 && error.response.data.errors) {
        return error.response.data.errors;
    }
    return null;
}

export default getErrorResponse;
