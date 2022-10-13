class ForbiddenError extends Error {
    constructor(message) {
      super();
      this.name = 'ForbiddenError';
      this.message = message;
    }
  }

  export default ForbiddenError;