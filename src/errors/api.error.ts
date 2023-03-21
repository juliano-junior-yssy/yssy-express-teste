import HttpStatusCode from '@http/status-codes.http';

export class ApiError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number | undefined = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

// HttpStatusCode: 204 - No Content
export class NoContentError extends ApiError {
  constructor(message: string) {
    super(message, HttpStatusCode.NO_CONTENT);
  }
}

// HttpStatusCode: 400 - Bad Request
export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, HttpStatusCode.BAD_REQUEST);
  }
}

// HttpStatusCode: 401 - Unauthorized
export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, HttpStatusCode.UNAUTHORIZED);
  }
}

// HttpStatusCode: 403 - Forbidden
export class ForbiddenError extends ApiError {
  constructor(message: string) {
    super(message, HttpStatusCode.FORBIDDEN);
  }
}

// HttpStatusCode: 404 - Not Found
export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, HttpStatusCode.NOT_FOUND);
  }
}

// HttpStatusCode: 409 - Conflict
export class ConflictError extends ApiError {
  constructor(message: string) {
    super(message, HttpStatusCode.CONFLICT);
  }
}

// HttpStatusCode: 500 - Internal Server Error
export class InternalServerError extends ApiError {
  constructor(message: string) {
    super(message, HttpStatusCode.INTERNAL_SERVER_ERROR);
  }
}
