import { AxiosError } from "axios";

export function getErrorResponse(error) {
    const status = error.response.status ?? null
    if (status >= 400 && status < 500 && error.response.data.errors) {
        return error.response.data.errors;
    }
    return null;
}

export function isAuthenticated(error) {
    if (error instanceof AxiosError) {
        const code = error.response.status;
        if (code === 401 || code === 403) {
            return false;
        }
    }
    return true;
}
