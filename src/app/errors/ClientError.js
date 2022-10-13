class ClientError extends Error {
    constructor(message) {
      super();
      this.name = 'ClientError';
      this.message = message;
    }
  }

  export default ClientError;