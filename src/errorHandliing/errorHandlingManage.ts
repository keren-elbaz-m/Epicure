import { ErrorCode } from "../types/errorTypes";

export interface IErrorResponse{
    statusCodeNumber: ErrorCode;
    devMessage: string;
    clientMessage?: string;
}

export function handleError( statusCodeNumber: ErrorCode, error?: unknown, clientMessage?:string): IErrorResponse{ 
    let devMessage = "An unknown error occurred.";

    if (error instanceof Error) {
        devMessage = error.message;
    }else if(typeof error === 'string'){
        devMessage = error;
    }

    return {
        statusCodeNumber,
        devMessage,
        clientMessage,
    };
}


