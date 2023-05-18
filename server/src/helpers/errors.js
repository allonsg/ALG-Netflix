class AlgNetflixApiError extends Error {
  constructor(message) {
    super(message);
    this.status = 500;
  }
}

class NotAuthorizedError extends AlgNetflixApiError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

class NotFoundError extends AlgNetflixApiError {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

class BadRequestError extends AlgNetflixApiError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ConflictError extends AlgNetflixApiError {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}

export default {
  AlgNetflixApiError,
  NotAuthorizedError,
  NotFoundError,
  BadRequestError,
  ConflictError,
};
