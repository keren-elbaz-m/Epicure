export type ErrorCode = 400 | 401 | 403 | 404 | 422|  500;

// export type IErrorMessage = {
//     [key in ErrorCode]:{
//         devMessage: string;
//         clientMessage: string;
//     }
// }

// export const errorMessages: IErrorMessage = {
//     400: {
//         devMessage: "Bad Request: Invalid data or missing fields.",
//         clientMessage: "Your request was invalid. Please check and try again.",
//     },
//     401: {
//         devMessage: "Unauthorized: Token or credentials are missing/invalid.",
//         clientMessage: "You are not logged in. Please authenticate.",
//     },
//     403: {
//         devMessage: "Forbidden: User does not have access.",
//         clientMessage: "You are not allowed to do that.",
//     },
//     404: {
//         devMessage: "Not Found: Resource does not exist.",
//         clientMessage: "We couldn't find what you were looking for.",
//     },
//     422: {
//         devMessage: "Unprocessable Entity: Invalid data or missing fields.",
//         clientMessage: "Your request was invalid. Please check and try again.",
//     },
//     500: {
//         devMessage: "Internal Server Error: Something went wrong.",
//         clientMessage: "Oops! Something went wrong. Please try later.",
//     },
        
// }
