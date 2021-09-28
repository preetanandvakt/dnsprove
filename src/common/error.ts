export class CodedError extends Error {
  code: number;

  codeString: string;

  constructor(message: string, code: number, codeString: string) {
    super(message);
    this.code = code;
    this.codeString = codeString;
  }
}

export enum DnsproveStatusCode {
  IDNS_QUERY_ERROR_GENERAL = 0,
  IDNS_QUERY_RESPONSE_TRANSFORMER_MISSING = 1,
}
