class ClientError extends Error {
    constructor({developerMessage,message,messageCode}) {
      super();
      this.name = 'ServerError';
      this.developerMessage = developerMessage;
      this.message = message;
      this.messageCode = messageCode;
    }
  }

  export default ClientError;