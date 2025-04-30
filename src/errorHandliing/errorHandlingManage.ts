import { errorMessages, errorCode } from "../types/errorTypes";

export interface IErrorResponse{
    statusCodeNumber: number;
    devMessage: string;
    clientMessage: string;
}

export function handleError( statusCodeNumber: errorCode, customDevMessage?: string): IErrorResponse{
    const unknownError = {
        devMessage: "An unknown error occurred.",
        clientMessage: "An unknown error occurred.",
    };

    const errorMessage = errorMessages[statusCodeNumber] || unknownError;

    return {
        statusCodeNumber,
        devMessage: customDevMessage ?? errorMessage.devMessage,
        clientMessage: errorMessage.clientMessage,
    };
}


