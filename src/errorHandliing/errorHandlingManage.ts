import { ErrorCode } from "../types/errorTypes";

export interface IErrorResponse{
    statusCodeNumber: ErrorCode;
    devMessage?: string;
    clientMessage?: string;
    error?: Error;
}

export function handleError({ statusCodeNumber, devMessage, clientMessage, error }: {
  statusCodeNumber: ErrorCode;
  devMessage?: string;
  clientMessage?: string;
  error?: unknown;
}): IErrorResponse {
 
  if (!devMessage) {
    if (error instanceof Error) {
        devMessage = error.message;
    }else if(typeof error === 'string'){
        devMessage = error;
    }else{
        devMessage = "An unknown error occurred.";
    }
  }

  return {
    statusCodeNumber,
    devMessage,
    clientMessage,
  };
}


