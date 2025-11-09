export class HttpError extends Error {
  statusCode: number;
  message: string;
  context?: string;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}
